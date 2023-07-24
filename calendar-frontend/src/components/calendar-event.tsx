export type EventInfo = {
    id: string;
    name: string;
};

export default function CalendarEvent(props: {event: EventInfo}) {
    return (
        <p>{props.event.name}</p>
    )
}