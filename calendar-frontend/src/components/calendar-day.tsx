import { EventInfo } from "../utils/connection-utils";
import EventsList from "./events-list";

export default function CalendarDay(props: {date: Date | null, events: EventInfo[]}) {
	let bgClass = "";
	
	if (props.date) {
		bgClass = "day ";
		bgClass += (props.date.getDay() === 0 || props.date.getDay() === 6) ? "weekend" : "weekday";	// Set background color differently for weekends
	}
	else {
		bgClass = "day dummy";
	}

	return (
		<div className={bgClass}>
			<div className="day-number">
				{props.date ? props.date.getDate() : ""}
			</div>
			<EventsList key={crypto.randomUUID()} date={props.date} events={props.date ? props.events : null}></EventsList>
		</div>
	)
}