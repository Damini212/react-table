import React from "react";

export default function EditOnlyRows({
  handleEditFormChange,
  editFormData,
  handleCancelClick,
  handleDeleteClick,
}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Enter a name..."
          name="fullName"
          onChange={handleEditFormChange}
          value={editFormData.fullName}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an address..."
          name="address"
          onChange={handleEditFormChange}
          value={editFormData.address}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          onChange={handleEditFormChange}
          value={editFormData.phoneNumber}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="email"
          onChange={handleEditFormChange}
          value={editFormData.email}
        />
      </td>
      <td>
        <button type="submit">SAVE</button>
        <button type="button" onClick={handleCancelClick}>
          CANCEL
        </button>
      </td>
    </tr>
  );
}
