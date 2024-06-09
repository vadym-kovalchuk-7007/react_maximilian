import React from "react";
import { fetchAvailablePlaces } from "../http.js";
import { sortPlacesByDistance } from "../loc.js";
import Error from "./Error.jsx";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const availablePlaces = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            availablePlaces,
            position.coords.latitude,
            position.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || "Couldnt fetch places" });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);
  if (error) return <Error title="Error dialog" message={error.message} />;

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isFetching}
      loadingText="Loading..."
    />
  );
}
