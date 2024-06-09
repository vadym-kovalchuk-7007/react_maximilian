import { useCallback, useEffect, useRef, useState } from "react";

import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import Error from "./components/Error.jsx";
import Modal from "./components/Modal.jsx";
import Places from "./components/Places.jsx";
import { getUserPlaces, updateUserPlaces } from "./http.js";

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingMessage, setErrorUpdatingMessage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserPlaces() {
      setIsFetching(true);
      try {
        const userPlaces = await getUserPlaces();
        console.log(userPlaces);
        setUserPlaces(userPlaces);
      } catch (error) {
        setError({ message: error.message || "Cant fetch user places" });
      }
      setIsFetching(false);
    }
    fetchUserPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      const resMessage = await updateUserPlaces([selectedPlace, ...userPlaces]);
      console.log(resMessage);
    } catch (error) {
      console.log(`error:${error}`);
      setUserPlaces(userPlaces); //rollback if PUT error
      setErrorUpdatingMessage({
        message: error.message || "Failed to update places",
      });
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id),
    );
    try {
      await updateUserPlaces(
        userPlaces.filter((place) => place.id !== selectedPlace.current.id),
      );
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingMessage({
        message: error.mesage || "Failed to delete user place",
      });
    }

    setModalIsOpen(false);
  }, []);

  function handleErrorMessage() {
    setErrorUpdatingMessage(null);
  }

  return (
    <>
      <Modal open={errorUpdatingMessage} onClose={handleErrorMessage}>
        {errorUpdatingMessage && (
          <Error
            title="Error updating places"
            message={errorUpdatingMessage.message}
          />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          isLoading={isFetching}
          loadingText="Loading user places..."
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
