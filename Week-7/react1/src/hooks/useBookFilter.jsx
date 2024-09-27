import { useMemo } from "react";
const useBookFilter = (books) => {
  const filteredBooks = useMemo(() => books.sort(), [books]);
  return filteredBooks;
};

export default useBookFilter;
