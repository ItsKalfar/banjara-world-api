import moment from "moment/moment";

export const fetchDate = (date?: string): string =>
  date ? moment(date).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD");

export const fetchTime = (date?: string): string =>
  date ? moment(date).format("HH:mm:ss") : moment().format("HH:mm:ss");

export const fetchMinuteHours = (date?: string): string =>
  date ? moment(date).format("HH:mm") : moment().format("HH:mm");

export const fetchDateTime = (date?: string): string =>
  date
    ? moment(date).format("YYYY-MM-DD HH:mm:ss")
    : moment().format("YYYY-MM-DD HH:mm:ss");

export const subtractMonths = (month: number): string =>
  moment().subtract(month, "months").format("YYYY-MM-DD");
