export default function CalendarDay(props) {
	let bgClass = "";
	if (props.date) {
		bgClass = "day "
		bgClass += (props.date.getDay() === 0 || props.date.getDay() === 6) ? "weekend" : "weekday";	// Set background color differently for weekends
	}
	else {
		bgClass = "day dummy";
	}

	return (
		<div className={bgClass}>
			{props.date ? props.date.getDate() : ""}
		</div>
	)
}