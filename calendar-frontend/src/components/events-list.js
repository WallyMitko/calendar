export default function EventsList(props) {
	let eventElements = <div></div>
	if (props.events) {
		eventElements = props.events.map(event => <p>{event}</p>);
	}
	return (
		<div className="events-list">
			{eventElements}
		</div>
	);
}