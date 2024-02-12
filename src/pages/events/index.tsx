import EventList from "@/components/events/event-list";
import { getAllEvents } from "../../../dummy-data";
import EventsSearch from "@/components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();
  function handleSearch(year: any, month: any) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={handleSearch}></EventsSearch>
      <EventList items={allEvents}></EventList>
    </Fragment>
  );
}
