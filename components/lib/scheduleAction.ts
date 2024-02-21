const base64 = require('base-64');

export async function fetchSchedules() {
  
  const login = process.env.LOGIN;
  const password = process.env.PASSWORD;
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
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all Schedules.');
  }
}

export async function fetchViewSchedules({name, generation, department} : {name: string, generation: string, department: string}) {
  
  const login = process.env.LOGIN;
  const password = process.env.PASSWORD;
  const allScheduleAPI = process.env.SCHEDULE_ALL + "/view/" + name + "/" +  generation + "/" + department + "";
  console.log(allScheduleAPI);
  console.log(base64.encode(`${login}:${password}`));
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
    console.error('Database Error:', err);
    throw new Error('Failed to fetch view Schedules.');
  }
}