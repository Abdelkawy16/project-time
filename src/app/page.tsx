import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "../../dummy-data";

// export default function Home() {
//   const featuredEvents = getFeaturedEvents();
//   return (
//     <div>
//       <ul>
//         <EventList items={featuredEvents}></EventList>
//       </ul>
//     </div>
//   );
// }


// pages/index.tsx
import React from 'react';
import Layout from "@/components/layout/layout";

const Home: React.FC = () => {
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
};

export default Home;

