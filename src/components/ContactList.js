import { useState } from "react";

function ContactList({ contacts, onEdit, onDelete }) {
    return (
      <ul className="shadow-3xl bg-slate-300 opacity-80 rounded-xl">
        {contacts.map((contact) => (
          <li className="m-4 p-4 font-semibold" key={contact.mobileNumber}>
            {contact.name}: {contact.mobileNumber}{" "}
            <button className="bg-slate-500 hover:bg-black p-1 rounded-lg text-white" onClick={() => onEdit(contact)}>Edit</button>{" "}
            <button className="bg-slate-500 hover:bg-black p-1 rounded-lg text-white" onClick={() => onDelete(contact)}>Delete</button>
          <hr /></li>
          
        ))}
      </ul>
    );
  }
export default ContactList;