import EventsList from "./events-list";

export default function CalendarDay(props) {
	let bgClass = "";
	let events = ["Event 1", "Event 2", "Event 3"];
	if (props.date) {
		bgClass = "day ";
		bgClass += (props.date.getDay() === 0 || props.date.getDay() === 6) ? "weekend" : "weekday";	// Set background color differently for weekends
	}
	else {
		bgClass = "day dummy";
	}

	return (
		<div className={bgClass}>
			<div class="day-number">
				{props.date ? props.date.getDate() : ""}
			</div>
			<EventsList events={props.date ? events : null}></EventsList>
		</div>
	)
}