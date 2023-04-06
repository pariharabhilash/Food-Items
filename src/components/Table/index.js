import React from "react";
import "./style.css";

const Table = ({ foodList, onDelete, onEdit }) => {
  const onEditHandler = (e, data) => {
    onEdit(data);
  };
  const onDeleteHandler = (e, id) => {
    onDelete(id);
    e.stopPropagation();
  };
  return (
    <div>
      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Status</th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        {foodList.map(({ id, ...item }, index) => (
          <tr className="table-section" key={id} onClick={(e) => onEditHandler(e, { id, ...item })}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>
              <button className="delete-btn" type="button" onClick={(e) => onDeleteHandler(e, id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Table;
