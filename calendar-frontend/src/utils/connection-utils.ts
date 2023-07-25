const serverURL = "http://localhost:3000";

export type EventInfo = {
    uuid: string;
    name: string;
    color: {red: number, green: number, blue: number};
    date: Date;
};

async function getEvents(year: number, month: number): Promise<EventInfo[]> {
    let response = await fetch(`${serverURL}/events/${year}/${month}`);
    let events = (await response.json()) as EventInfo[]
    for (let event of events) {
        event.date = new Date(event.date)   // Needed since fetch parses the date as a string
    }
    return events;
}

export {serverURL, getEvents};