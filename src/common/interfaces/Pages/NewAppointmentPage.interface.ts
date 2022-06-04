import { Dispatch, SetStateAction } from 'react';

export interface IDate {
  day: number;
  month: number;
  year: number;
}

export interface IDateFormProps {
  setDate: Dispatch<SetStateAction<IDate>>;
  date: IDate;
  setHour: Dispatch<SetStateAction<string | null>>;
  hourSelected: string | null;
  doctor: string;
}

export interface ISubmitFormProps {
  dateSelected: IDate;
  docSelected: string | null;
  hourSelected: string | null;
}
