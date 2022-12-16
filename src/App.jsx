import { useState, Fragment } from "react";
import { Data } from "./Data";
import "./App.css";
import ReadOnlyRows from "./ReadOnlyRows";
import EditOnlyRows from "./EditOnlyRows";

function App() {
  const [contacts, setContacts] = useState(Data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editContactId, setEditContactId] = useState(null);

  function handleAddFormChange(event) {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  }

  function handleEditFormChange(event) {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newEditFormData = { ...editFormData };
    newEditFormData[fieldName] = fieldValue;
    setEditFormData(newEditFormData);
  }

  function onSubmit(event) {
    event.preventDefault();
    const newContact = {
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];
    if (
      newContact.fullName.length === 0 ||
      newContact.address.length === 0 ||
      newContact.email.length === 0 ||
      newContact.phoneNumber.length === 0
    ) {
      alert("All field are mandatory");
    } else {
      setContacts(newContacts);
      setAddFormData({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
      });
    }
  }

  function handleEditFormSubmit(event) {
    event.preventDefault();
    const editedContact = {
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  }

  function handleEditClick(event, contact) {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  }

  function handleCancelClick() {
    setEditContactId(null);
  }

  function handleDeleteClick(contactId) {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  }

  return (
    <div className="app-container">
      <h1>List of Contacts</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditOnlyRows
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRows
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add A New Contact</h2>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          onChange={handleAddFormChange}
          name="fullName"
          value={addFormData.fullName}
        />
        <input
          className="input"
          type="text"
          placeholder="Address"
          onChange={handleAddFormChange}
          name="address"
          value={addFormData.address}
        />
        <input
          className="input"
          type="text"
          placeholder="Phone number"
          onChange={handleAddFormChange}
          name="phoneNumber"
          value={addFormData.phoneNumber}
        />
        <input
          className="input"
          type="text"
          placeholder="Email"
          onChange={handleAddFormChange}
          name="email"
          value={addFormData.email}
        />
        <button className="add-btn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}

export default App;
