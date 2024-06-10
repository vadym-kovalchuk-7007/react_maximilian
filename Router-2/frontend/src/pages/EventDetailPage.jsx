import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export const EventDetailPage = () => {
  const response = useRouteLoaderData("event-detail");
  console.log("Ev detail", response.event);
  return <EventItem event={response.event} />;
};

export async function detailLoader({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
  );
  if (!response.ok) {
    throw json({ message: "Not able to get event" });
  }
  return response;
}

export async function removeEvent({ request, params }) {
  console.log(request);
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: request.method,
    },
  );

  console.log(response);

  if (!response.ok)
    throw json({ message: "Couldn't delete event" }, { status: 500 });
  return redirect("/events");
}
