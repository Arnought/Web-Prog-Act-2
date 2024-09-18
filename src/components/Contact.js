import React, { useState } from 'react';
import './style.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Message: ${message}`);
    };

    return (
        <div className="page-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;