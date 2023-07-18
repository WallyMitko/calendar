import { useState } from "react";
import CalendarHeader from "./calendar-header";

export default function Calendar() {
	let [currentMonth, setMonth] = useState(6);
	let [currentYear, setYear] = useState(2023);
	
	let prevMonth = () => {
		let newMonth = currentMonth - 1;
		if (newMonth < 0) {
			newMonth += 12;
			setYear(currentYear - 1);
		}
		setMonth(newMonth);
	}
	let nextMonth = () => {
		let newMonth = currentMonth + 1;
		if (newMonth > 11) {
			newMonth -= 12;
			setYear(currentYear + 1);
		}
		setMonth(newMonth);
	}

	return (
		<CalendarHeader month={currentMonth} year={currentYear} prevMonth={prevMonth} nextMonth={nextMonth}></CalendarHeader>
	)
}