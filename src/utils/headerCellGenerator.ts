export const headerCellGenerator = (key: string) => {
  const tableHead = key.charAt(0).toUpperCase() + key.slice(1).replace(/[A-Z]/g, " $&").trim();
  return tableHead
}