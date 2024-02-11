import EventItem from "./event-item";

import classes from '@/components/events/event-list.module.css'

export default function EventList(props: any) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((item: any) => {
        return (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            location={item.location}
            image={item.image}
          ></EventItem>
        );
      })}
    </ul>
  );
}
