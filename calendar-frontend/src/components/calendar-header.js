import {monthNames, getPrevMonth, getNextMonth} from "../utils/month-utils"

export default function CalendarHeader(props) {


	return (
		<header className="calendar-header">
			<div className="month-change-container">
				<button className="month-change-button" onClick={props.prevMonth}>
					<p>&#9664; {getPrevMonth(props.month)}</p>
				</button>
			</div>


			<div className="month-heading-container">
				<h1 className="month-heading">
					{monthNames[props.month]} {props.year}
				</h1>
			</div>

			<div className="month-change-container">
				<button className="month-change-button" onClick={props.nextMonth}>
					<p>{getNextMonth(props.month)} &#9654;</p>
				</button>
			</div>
		</header>
	)
}