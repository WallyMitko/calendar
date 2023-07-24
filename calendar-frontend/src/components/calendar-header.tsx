import {monthNames, getPrevMonth, getNextMonth} from "../utils/month-utils"

export default function CalendarHeader(props: {date: Date, prevMonth: () => void, nextMonth: () => void}) {


	return (
		<header className="calendar-header">
			<div className="month-change-container">
				<button className="month-change-button" onClick={props.prevMonth}>
					<p>&#9664; {getPrevMonth(props.date.getMonth()).substring(0, 3)}</p>
				</button>
			</div>


			<div className="month-heading-container">
				<h1 className="month-heading">
					{monthNames[props.date.getMonth()]} {props.date.getFullYear()}
				</h1>
			</div>

			<div className="month-change-container">
				<button className="month-change-button" onClick={props.nextMonth}>
					<p>{getNextMonth(props.date.getMonth()).substring(0, 3)} &#9654;</p>
				</button>
			</div>
		</header>
	)
}