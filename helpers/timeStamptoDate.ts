export const timeStampToDate = (timestamp: string | any) => {
  var date = new Date(timestamp);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
