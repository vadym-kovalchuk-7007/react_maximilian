import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
export const NewEventPage = () => <EventForm />;

export async function newEventAction({ request, params }) {
  const data = await request.formData();
  const eventData = Object.fromEntries(data.entries());
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (response.status === 422) return response; // validation BE errors
  if (!response.ok)
    throw json({ message: "Couldn't store event" }, { status: 500 });
  return redirect("/events");
}
