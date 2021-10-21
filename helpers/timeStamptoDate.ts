export const timeStampToDate = (timestamp: string | any) => {
  var date = new Date(timestamp);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};
