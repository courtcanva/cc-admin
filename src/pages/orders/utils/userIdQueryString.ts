// util for search
const userIdQueryString = (userId?: string) => {
  return userId ? `&user_id=${userId}` : "";
};

export default userIdQueryString;
