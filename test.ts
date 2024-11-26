import { getMeetingsForQuery, getMeetingsForYear } from './apiWrapper';
import { Meeting } from './apiClasses';

getMeetingsForYear(2023)
    .then((meetings: Meeting[]) => { console.log(meetings); });