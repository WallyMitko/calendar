import { EventInfo } from "../utils/connection-utils";
import CalendarDay from "./calendar-day";

export default function CalendarWeek(props: {startDate: Date, events: EventInfo[]}) {
	let dates = [];
	let nullDayID = 696969;
	for (let i = 0; i < 7; i++) {
		if (i < props.startDate.getDay()) {
			dates.push(null);
		}
		else {
			let date = new Date(props.startDate);
			date.setDate(props.startDate.getDate() + (i - props.startDate.getDay()));
			dates.push(date.getMonth() === props.startDate.getMonth() ? date : null);
		}
	}
	
	let days = dates.map(date => 
		<CalendarDay key={date ? date.valueOf() : nullDayID++} date={date} events={props.events.filter(event => event.date.getDay() === date?.getDay())}></CalendarDay>
	);

	return (
		<div className="calendar-week">
			{days}
		</div>
	)
	
}