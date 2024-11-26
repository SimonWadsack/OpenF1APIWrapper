export class Meeting{
    circuit_key: number = 0;
    circuit_short_name: string = 'Testname';
    country_code: string = 'ABC';
    country_key: number = 0;
    country_name: string = 'Testcountry';
    date_start: Date = new Date();
    gmt_offset: string = '00:00:00';
    location: string = 'Testlocation';
    meeting_key: number = 0;
    meeting_name: string = 'Testmeeting';
    meeting_official_name: string = 'Testofficialname';
    year: number = 0;
}

export class Session{
    circuit_key: number = 0;
    circuit_short_name: string = 'Testname';
    country_code: string = 'ABC';
    country_key: number = 0;
    country_name: string = 'Testcountry';
    date_end: Date = new Date();
    date_start: Date = new Date();
    gmt_offset: string = '00:00:00';
    location: string = 'Testlocation';
    meeting_key: number = 0;
    session_key: number = 0;
    session_name: string = 'Testsession';
    session_type: string = 'Testtype';
    year: number = 0;
}

export class Driver{
    broadcast_name: string = 'Testbname';
    country_code: string = 'ABC';
    driver_number: number = 0;
    first_name: string = 'Test First Name';
    full_name: string = 'Test Full Name';
    headshot_url: string = 'http://example.com/headshot.jpg';
    last_name: string = 'Test Last Name';
    meeting_key: number = 0;
    name_acronym: string = 'TST';
    session_key: number = 0;
    team_colour: string = 'FFFFFF';
    team_name: string = 'Test Team';
}

export class Weather{
    air_temperature: number = 0;
    date: string = new Date().toISOString();
    humidity: number = 0;
    meeting_key: number = 0;
    pressure: number = 0;
    rainfall: boolean = false;
    session_key: number = 0;
    track_temperature: number = 0;
    wind_direction: number = 0;
    wind_speed: number = 0;
}

export class RaceControl{
    category: string = 'CarEvent';
    date: string = new Date().toISOString();
    driver_number: number = 0;
    flag: string = 'GREEN';
    lap_number: number = 1;
    meeting_key: number = 0;
    message: string = 'Test message';
    scope: string = 'Track';
    sector: number = 1;
    session_key: number = 0;
}