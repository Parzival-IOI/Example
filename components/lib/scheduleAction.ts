const base64 = require('base-64');

const login = process.env.LOGIN;
const password = process.env.PASSWORD;

export async function fetchSchedules() {
  const allScheduleAPI = process.env.SCHEDULE_ALL + "";
  try {
    const data = await fetch(allScheduleAPI, {
      method: "GET",
      headers: new Headers({
          "Authorization": `Basic ${base64.encode(`${login}:${password}`)}`
      }),
    });
    const schedule = await data.json();
    console.log(schedule);
    return schedule;
  } catch (err) {
    console.error('Error:', err);
    throw new Error('Failed to fetch all Schedules.');
  }
}

export async function fetchViewSchedules({name, generation, department} : {name: string, generation: string, department: string}) {
  const allScheduleAPI = process.env.SCHEDULE_ALL + `/view/E1/2/CS`;
  console.log(allScheduleAPI);
  console.log(base64.encode(`${login}:${password}`));
  try {
    const data = await fetch(allScheduleAPI);
    const schedule = await data;
    console.log(schedule);
    return schedule;
  } catch (err) {
    console.error('Error:', err);
    throw new Error('Failed to fetch view Schedules.');
  }
}