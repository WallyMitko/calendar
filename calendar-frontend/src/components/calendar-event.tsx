import { EventInfo } from "../utils/connection-utils"

export default function CalendarEvent(props: {event: EventInfo}) {
    const style = {
        backgroundColor: `rgb(${props.event.color.red}, ${props.event.color.green}, ${props.event.color.blue})`
    };

    return (
        <div style={style}>{props.event.name}</div>
    )
}