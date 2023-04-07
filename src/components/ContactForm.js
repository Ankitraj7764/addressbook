import React,{useState} from 'react'

function ContactForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ name, mobileNumber });
      setName("");
      setMobileNumber("");
    };
  
    return (
      <form onSubmit={handleSubmit} className="m-4  ">
        <label>
          Name:
          <input className='m-1 px-2 rounded-lg ' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Mobile Number:
          <input className='m-1 px-2 rounded-lg ' type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </label>
        <button className="text-black m-1 rounded-lg hover:bg-slate-400 p-1" type="submit">Add Contact</button>
      </form>
    );
}

export default ContactForm