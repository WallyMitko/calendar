import './App.css';
import Calendar from './components/calendar';
import Todo from './components/todo';
import {useParams} from 'react-router-dom'

function App() {
	// Handle URL parameters
	const params = useParams();
	// No parameters: Use the current date
	let date = new Date();

	// One parameter (year): Go to January of that year
	if (params.year && !Number.isNaN(parseInt(params.year))) {
		let year = parseInt(params.year);
		date.setFullYear(year);
		date.setMonth(0);
		// Two parameters (year, month): Go to the specified month
		if (params.month && !Number.isNaN(parseInt(params.month))) {
			let month = parseInt(params.month);
			if (month >= 0 && month <= 11)
				date.setMonth(month);
		}
	}

	return (
		<div className="App">
			<Calendar date={date}></Calendar>
			<Todo></Todo>
		</div>
	);
}

export default App;
