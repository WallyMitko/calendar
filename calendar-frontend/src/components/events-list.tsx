import CalendarEvent from "./calendar-event";
import { EventInfo } from "./calendar-event";

export default function EventsList(props: {date: Date | null, events: EventInfo[] | null}) {
	let eventElements = [<div></div>]
	if (props.events) {
		eventElements = props.events.map(event => <CalendarEvent key={crypto.randomUUID()} event={event}></CalendarEvent>);
	}
	return (
		<div className="events-list">
			{eventElements}
		</div>
	);
}