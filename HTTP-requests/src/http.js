export async function fetchAvailablePlaces() {
    const response = await fetch(`${HTTP_ADDRESS}/places`);
    if (!response.ok) throw new Error("Failed to fetch data");
    const resData = await response.json();
    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch(`${HTTP_ADDRESS}/user-places`, {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) throw new Error("Failed send user's places")
    const resData = await response.json();
    return resData.message;
}

export async function getUserPlaces() {
    const response = await fetch(`${HTTP_ADDRESS}/user-places`);
    if (!response.ok) throw new Error("Failed fetch user places");
    const resData = await response.json();
    return resData.places;
}

export const HTTP_ADDRESS = 'http://localhost:3000'