import Schedule from "node-schedule";
import mcache from "memory-cache";

export const initJob = (task: () => void, timing: Schedule.RecurrenceRule) => {
  Schedule.scheduleJob(timing, async () => {
    task();
    mcache.clear();
  });
};

export const initScheduleTime = (
  hour: number,
  minute: number,
  second: number
) => {
  let rule = new Schedule.RecurrenceRule();
  rule.hour = hour;
  rule.minute = minute;
  rule.second = second;
  return rule;
};
