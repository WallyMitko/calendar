# Calendar App (WIP)
Full-stack calendar app using React, Node, NestJS, Postgres (intended for personal use, to be displayed on a TV screen)

### Current features
- View this month's calendar
- Go forward and backward to see other months
- Go directly to a given month using URL parameters (/year or /year/month)
- Fetch calendar events from server and render them on the calendar

### In-progress features
- Expand back end functionality - currently just serves a hard-coded list of events, need to add a database and API endpoints to create, modify, and delete events

### Planned features
- Add and delete events
- To-do list
    - (Right pane, currently empty, will display upcoming events and the to-do list)
- User accounts (with own calendars and to-do lists)
- Containerization (for easier deployment to a Raspberry Pi or similar)