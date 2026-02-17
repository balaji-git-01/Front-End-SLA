const average = (marks) => {
  let total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
};

console.log(average([12,12,345,12]));
