import { formatInTimeZone } from "date-fns-tz";
const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const result = formatInTimeZone(date, "Australia/Sydney", "yyyy-MM-dd HH:mm:ss");
  return result;
};

export default formatDate;
