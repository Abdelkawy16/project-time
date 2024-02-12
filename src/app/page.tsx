import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "../../dummy-data";
import Layout from "@/components/layout/layout";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Layout>
      <div>
      <ul>
        <EventList items={featuredEvents}></EventList>
      </ul>
    </div>
    </Layout>
  );
}

