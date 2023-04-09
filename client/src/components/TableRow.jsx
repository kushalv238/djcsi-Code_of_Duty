import "./tablerow.css";
const TableRow = (props) => {
  return (
    <tr>
      <td className=" flex justify-center">
        <img src={props.profile} alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.contact}</td>
      <td>{props.aadhaar}</td>
      <td>{props.pan}</td>
      <td>{props.workerType}</td>
      <td>{props.experience}</td>
      <td>
        <div className={`status${props.active ? ' bg-green':''}`}></div>
      </td>
    </tr>
  );
};

export default TableRow;
