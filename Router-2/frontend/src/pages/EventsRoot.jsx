import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export const EventsRoot = () => (
  <>
    <EventsNavigation />
    <Outlet />
  </>
);
