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

function getPrevMonth(month) {
	if (month === 0) {
		return monthNames[11];
	}
	return monthNames[month - 1];
}

function getNextMonth(month) {
	if (month === 11) {
		return monthNames[0];
	}
	return monthNames[month + 1];
}

/**
 * Get the start dates for each week in a month (e.g. for July 2023, returns [2023-07-01, 2023-07-02, 2023-07-09, 2023-07-16, 2023-07-23, 2023-07-30])
 * @param {Date} firstDay First day of the month whose week start dates you want
 * @returns {[Date]} List of start dates for each week in the month
 */
function getWeekStartDates(firstDay) {
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

/**
 * Get the number of days in the current month for a given date
 * @param {Date} date The date to check
 * @returns {number} The number of days in the month
 */
function daysInMonth(date) {
	let months31 = [0, 2, 4, 6, 7, 9, 11]
	let month = date.getMonth();
	if (months31.includes(month))
		return 31;
	else if (month !== 1)
		return 30;
	return isLeapYear(date.year) ? 29 : 28;
}

/**
 * Tests whether a given year is a leap year
 * @param {number} year The year to test
 * @returns {boolean} True if year is a leap year (divisible by 400 or (divisible by 4, but not 100))
 */
function isLeapYear(year) {
	return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

export {
	monthNames,
	getPrevMonth,
	getNextMonth,
	getWeekStartDates,
	daysInMonth
}