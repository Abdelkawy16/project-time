import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "@/components/events/event-list";
import { Fragment } from "react";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import ResultsTitle from "@/components/ui/results-title";

export default function FilteredEventPage() {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const events = getFilteredEvents({ year: numYear, month: numMonth });
  const date = new Date(numYear, numMonth);
  return events.length ? (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events}></EventList>
    </Fragment>
  ) : (
    <Fragment>
      <p>No events found for the chosen filter!</p>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>
  );
}
