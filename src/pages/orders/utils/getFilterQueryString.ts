import {
  FilterObjectType,
  FilterKey,
} from "@/components/OrderComponents/OrderStatusDropdownFilter";

const getFilterQueryString = (filter: FilterObjectType) => {
  const keys = Object.keys(filter) as FilterKey[];
  return keys
    .reduce((acc: string[], key: FilterKey) => {
      const filterValue = filter[key];
      return filterValue ? [...acc, `status=${key}`] : acc;
    }, [])
    .join("&");
};

export default getFilterQueryString;
