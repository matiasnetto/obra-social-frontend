import { ISimpleDay } from '../common/interfaces/API/Day.interface';
import genMonthDays from './genMonthDays';
type TMonthDay = ISimpleDay | undefined;

const genEmptyCalendar = (date: Date) => {
  const actualMonthDays = genMonthDays(date);
  const calendar: TMonthDay[] = [];

  // map prev month empty days
  for (let i = 0; i < actualMonthDays[0].weekDay; i++) {
    calendar.push(undefined);
  }

  //map month days
  actualMonthDays.forEach((el) => calendar.push(el));

  // map next month empty days
  const iterations = 6 - actualMonthDays[actualMonthDays.length - 1].weekDay;
  for (let i = 0; i < iterations; i++) {
    calendar.push(undefined);
  }

  return calendar;
};

export default genEmptyCalendar;
