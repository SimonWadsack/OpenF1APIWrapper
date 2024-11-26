import { Meeting, Session, Driver, Weather, RaceControl } from "./apiClasses";

/* private helper function to query the api */
async function fetchApi(method: string, query: string){
    const response = await fetch(`https://api.openf1.org/v1/${method}?${query}`);
    const data = await response.json();
    return data;
}

//#region Meetings

/**
 * Retrieves the list of meetings for a specific year from the OpenF1 API.
 *
 * @param year - The year for which to retrieve the meetings.
 * @returns A promise that resolves to the list of meetings for the specified year.
 */
export async function getMeetingsForYear(year: number): Promise<Meeting[]> {
    return fetchApi('meetings', `year=${year}`);
}

/**
 * Retrieves the meeting for a specific circuit key from the OpenF1 API.
 *
 * @param meeting_key - The meeting key for which to retrieve the meeting.
 * @returns A promise that resolves to a meeting for the specified meeting key.
 */
export async function getMeetingForMeetingKey(meeting_key: number): Promise<Meeting> {
    return fetchApi('meetings', `meeting_key=${meeting_key}`);
}

/**
 * Retrieves the list of meetings for a specific query from the OpenF1 API.
 *
 * @experimental This function grants direct access to the OpenF1 API, please rather use a specific function for your use case.
 * 
 * @param query - The query for which to retrieve the meetings.
 * @returns A promise that resolves to the list of meetings for the specified query.
 */
export async function getMeetingsForQuery(query: string): Promise<Meeting[]> {
    return fetchApi('meetings', query);
}

//#endregion

//#region Sessions

/**
 * Retrieves the list of sessions for a specific meeting key from the OpenF1 API.
 *
 * @param meeting_key - The meeting key for which to retrieve the sessions.
 * @returns A promise that resolves to the list of sessions for the specified meeting key.
 */
export async function getSessionsForMeetingKey(meeting_key: number): Promise<Session[]> {
    return fetchApi('sessions', `meeting_key=${meeting_key}`);
}

/**
 * Retrieves the list of sessions for a specific meeting from the OpenF1 API.
 *
 * @param meeting - The meeting for which to retrieve the sessions.
 * @returns A promise that resolves to the list of sessions for the specified meeting.
 */
export async function getSessionsForMeeting(meeting: Meeting): Promise<Session[]> {
    return getSessionsForMeetingKey(meeting.meeting_key);
}

/**
 * Retrieves the session for a specific session key from the OpenF1 API.
 *
 * @param session_key - The session key for which to retrieve the session.
 * @returns A promise that resolves to a session for the specified session key.
 */
export async function getSessionForSessionKey(session_key: number): Promise<Session> {
    return fetchApi('sessions', `session_key=${session_key}`);
}

/**
 * Retrieves the list of sessions for a specific query from the OpenF1 API.
 *
 * @experimental This function grants direct access to the OpenF1 API, please rather use a specific function for your use case.
 * 
 * @param query - The query for which to retrieve the sessions.
 * @returns A promise that resolves to the list of sessions for the specified query.
 */
export async function getSessionsForQuery(query: string): Promise<Session[]> {
    return fetchApi('sessions', query);
}

//#endregion

//#region Drivers

/**
 * Retrieves the list of drivers for a specific session key from the OpenF1 API.
 *
 * @param session_key - The session key for which to retrieve the drivers.
 * @returns A promise that resolves to the list of drivers for the specified session key.
 */
export async function getDriversForSessionKey(session_key: number): Promise<Driver[]> {
    return fetchApi('drivers', `session_key=${session_key}`);
}

/**
 * Retrieves the list of drivers for a specific session from the OpenF1 API.
 *
 * @param session - The session for which to retrieve the drivers.
 * @returns A promise that resolves to the list of drivers for the specified session.
 */
export async function getDriversForSession(session: Session): Promise<Driver[]> {
    return getDriversForSessionKey(session.session_key);
}

/**
 * Retrieves the driver for a specific driver number from the OpenF1 API.
 *
 * @experimental This function grants direct access to the OpenF1 API, please rather use a specific function for your use case.
 * 
 * @param driver_number - The driver number for which to retrieve the driver.
 * @returns A promise that resolves to a driver for the specified driver number.
 */
export async function getDriversForQuery(query: string): Promise<Driver[]> {
    return fetchApi('drivers', query);
}

//#endregion

//#region Weather

/**
 * Retrieves the weather for a specific session from the OpenF1 API.
 *
 * @param session - The session for which to retrieve the weather.
 * @returns A promise that resolves to the weather for the specified session.
 */
export async function getWeatherForSession(session: Session): Promise<Weather> {
    const end_date = session.date_start;
    end_date.setMinutes(end_date.getMinutes() + 5);
    const data = await fetchApi('weather', `session_key=${session.session_key}&date>=${session.date_start}&date<=${end_date}`);
    return data[0];
}

/**
 * Retrieves the weather for a specific session key from the OpenF1 API.
 *
 * @param session_key - The session key for which to retrieve the weather.
 * @returns A promise that resolves to the weather for the specified session key.
 */
export async function getWeatherForSessionKey(session_key: number): Promise<Weather> {
    const session = await getSessionForSessionKey(session_key);
    return getWeatherForSession(session);
}

//#endregion

//#region Race Control

/**
 * Retrieves the list of race control information for a specific session key from the OpenF1 API.
 *
 * @param session_key - The session key for which to retrieve the race control information.
 * @returns A promise that resolves to the list of race control information for the specified session key.
 */
export async function getRaceControlForSessionKey(session_key: number): Promise<RaceControl[]> {
    return fetchApi('race_control', `session_key=${session_key}`);
}

/**
 * Retrieves the list of race control information for a specific session from the OpenF1 API.
 *
 * @param session - The session for which to retrieve the race control information.
 * @returns A promise that resolves to the list of race control information for the specified session.
 */
export async function getRaceControlForSession(session: Session): Promise<RaceControl[]> {
    return getRaceControlForSessionKey(session.session_key);
}

/**
 * Retrieves the list of race control information for a specific session key until and including the spcific lap from the OpenF1 API.
 *
 * @param session_key - The session key for which to retrieve the race control information.
 * @param lap - The lap number until and including which to retrieve the race control information.
 * @returns A promise that resolves to the list of race control information for the specified session key.
 */
export async function getRaceControlForSessionKeyUntilLap(session_key: number, lap: number): Promise<RaceControl[]> {
    return fetchApi('race_control', `session_key=${session_key}&lap_number<=${lap}`);
}

/**
 * Retrieves the list of race control information for a specific session until and including the spcific lap from the OpenF1 API.
 *
 * @param session - The session for which to retrieve the race control information.
 * @param lap - The lap number until and including which to retrieve the race control information.
 * @returns A promise that resolves to the list of race control information for the specified session.
 */
export async function getRaceControlForSessionUntilLap(session: Session, lap: number): Promise<RaceControl[]> {
    return fetchApi('race_control', `session_key=${session.session_key}&lap_number<=${lap}`);
}

/**
 * Retrieves the list of race control information for a specific query from the OpenF1 API.
 *
 * @experimental This function grants direct access to the OpenF1 API, please rather use a specific function for your use case.
 * 
 * @param query - The query for which to retrieve the race control information.
 * @returns A promise that resolves to the list of race control information for the specified query.
 */
export async function getRaceControlForQuery(query: string): Promise<RaceControl[]> {
    return fetchApi('race_control', query);
}

//#endregion

