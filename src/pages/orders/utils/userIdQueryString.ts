// util for search

// keep here temporary, will add search order Id and combine with the user ID search
const userIdQueryString = (userId?: string) => {
  return userId ? `&user_id=${userId}` : "";
};

export default userIdQueryString;
