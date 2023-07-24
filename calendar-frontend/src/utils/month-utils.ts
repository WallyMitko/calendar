const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

function getPrevMonth(month: number) {
	if (month === 0) {
		return monthNames[11];
	}
	return monthNames[month - 1];
}

function getNextMonth(month: number) {
	if (month === 11) {
		return monthNames[0];
	}
	return monthNames[month + 1];
}

function getWeekStartDates(firstDay: Date) {
	let dates = [firstDay];
	let offset = 7 - firstDay.getDay();	// If the first day is not a Sunday, add less than 7 for the next start date
	let currentDate = firstDay.getDate() + offset;
	while (currentDate <= daysInMonth(firstDay)) {
		let newDate = new Date(firstDay);
		newDate.setDate(currentDate);
		dates.push(newDate);
		currentDate += 7;
	}
	return dates;
}

function daysInMonth(date: Date) {
	let months31 = [0, 2, 4, 6, 7, 9, 11]
	let month = date.getMonth();
	if (months31.includes(month))
		return 31;
	else if (month !== 1)
		return 30;
	return isLeapYear(date.getFullYear()) ? 29 : 28;
}

function isLeapYear(year: number) {
	return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

export {
	monthNames,
	getPrevMonth,
	getNextMonth,
	getWeekStartDates,
	daysInMonth
}