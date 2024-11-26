import { getMeetingsForQuery, getMeetingsForYear } from './apiWrapper';
import { Meeting } from './apiClasses';


//get the meetings with .then
getMeetingsForYear(2023)
    .then((meetings: Meeting[]) => { console.log(meetings); });

//get the meetings with an async function
async function test(){
    const meetings = await getMeetingsForYear(2023);
    console.log(meetings);
}

test();