import React from "react";

export default function ReadOnlyRows({
  contact,
  handleEditClick,
  handleDeleteClick,
}) {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="text"
          onClick={(event) => handleEditClick(event, contact)}
        >
          EDIT
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          DELETE
        </button>
      </td>
    </tr>
  );
}
