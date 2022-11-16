import { formatInTimeZone } from "date-fns-tz";
const formatDate = (isoDate: string) => {
  console.log("isoDate: ", isoDate);
  const date = new Date(isoDate);
  console.log(date)

  const result = formatInTimeZone(date, "Australia/Sydney", "yyyy-MM-dd HH:mm:ss");
  return result;
};

export default formatDate;