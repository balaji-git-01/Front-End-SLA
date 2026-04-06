const Table = () => {
  let studentDetails = [
    {
      RollNo: 1,
      name: "Anitha",
      grade: "A",
    },
    {
      RollNo: 2,
      name: "Rahuk",
      grade: "B",
    },
    {
      RollNo: 3,
      name: "Deepak",
      grade: "A+",
    },
  ];
  return (
    <div>
      <table>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Grade</th>
        </tr>
        {studentDetails.map((details) => (
          <tr key={details.RollNo}>
            <td>{details.RollNo}</td>
            <td>{details.name}</td>
            <td>{details.grade}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;