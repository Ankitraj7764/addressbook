import logo from './logo.svg';
import React,{useState} from 'react'
import './input.css'
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    if (contacts.some((c) => c.mobileNumber === contact.mobileNumber)) {
      alert("Duplicate mobile number, contact not added.");
      return;
    }
    setContacts([...contacts, contact]);
  };

  const editContact = (oldContact, newContact) => {
    setContacts(contacts.map((c) => (c.mobileNumber === oldContact.mobileNumber ? newContact : c)));
  };

  const deleteContact = (contactToDelete) => {
    setContacts(contacts.filter((c) => c.mobileNumber !== contactToDelete.mobileNumber));
  };

  const filterContactsByName = (name) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(name.toLowerCase()));
  };

  const filterContactsByMobileNumber = (mobileNumber) => {
    return contacts.filter((contact) => contact.mobileNumber.includes(mobileNumber));
  };

  const [filterName, setFilterName] = useState("");
  const [filterMobileNumber, setFilterMobileNumber] = useState("");

  const filteredContacts =
    filterName !== ""
      ? filterContactsByName(filterName)
      : filterMobileNumber !== ""
      ? filterContactsByMobileNumber(filterMobileNumber)
      : contacts;

  return (
    <div className='flex-col bg-sky-100 rounded-2xl p-4 m-4'>
    <div className=" p-4 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Simple Address Book Manager</h1> <hr />
        </div>
      </div>
      <ContactForm onSubmit={addContact} />
      <label>
        Filter by Name:
        <input type="text" className='m-2 px-2 rounded-lg '  value={filterName} onChange={(e) => setFilterName(e.target.value)} />
      </label>
      <label>
        Filter by Mobile Number:
        <input type="text" className='m-2 px-2 rounded-lg '  value={filterMobileNumber} onChange={(e) => setFilterMobileNumber(e.target.value)} />
      </label>
      <ContactList 
        contacts={filteredContacts}
        onEdit={(oldContact) => {
          const newMobileNumber = prompt("Enter new mobile number:", oldContact.mobileNumber);
          if (newMobileNumber !== null) {
            const newContact = { ...oldContact, mobileNumber: newMobileNumber };
            editContact(oldContact, newContact);
          }
        }}
        onDelete={deleteContact}
      />
    </div>
  );}
export default App;
