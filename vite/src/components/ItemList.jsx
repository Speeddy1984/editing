import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItem, deleteItem } from "../redux/actions";

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Field 1</th>
          <th>Field 2</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.field1}</td>
            <td>{item.field2}</td>
            <td>
              <button onClick={() => dispatch(editItem(item))}>Edit</button>
              <button onClick={() => dispatch(deleteItem(item.id))}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
