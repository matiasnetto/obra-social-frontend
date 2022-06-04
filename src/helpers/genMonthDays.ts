import { addDays, endOfMonth, startOfMonth } from 'date-fns';
import { ISimpleDay } from '../common/interfaces/API/Day.interface';

const genMonthDays = (date: Date): ISimpleDay[] => {
  const days = [];
  for (let i = 1; i <= endOfMonth(date).getDate(); i++) {
    const dayDate = addDays(startOfMonth(date), i - 1); //day date is the first month day + the actual index

    // create the new day
    const dayObject: ISimpleDay = {
      date: new Date(dayDate),
      day: dayDate.getDate(),
      weekDay: dayDate.getDay(),
      month: dayDate.getMonth(),
      year: dayDate.getFullYear(),
    };
    days.push(dayObject);
  }
  return days;
};

export default genMonthDays;
