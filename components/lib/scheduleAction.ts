export async function fetchSchedules() {
    const base64 = require('base-64');
    const login = process.env.LOGIN;
    const password = process.env.PASSWORD;
    const allScheduleAPI = process.env.SCHEDULE_ALL + "";
    try {
      const data = await fetch(allScheduleAPI, {
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