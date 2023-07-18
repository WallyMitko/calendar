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

export {
	monthNames,
	getPrevMonth,
	getNextMonth
}