import { json, useRouteLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export function EventsPage() {
  const response = useRouteLoaderData("events");

  return <EventsList events={response.events} />;
}

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "ooops" }, { status: 404 });
  } else {
    return response;
  }
}
