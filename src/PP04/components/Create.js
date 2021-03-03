import React, { useState } from 'react'
import './Create.css';

function CreateAcc() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCreated, setCreationStatus] = useState(false);

    const handleCreate = (event) => {
        event.preventDefault();
        setCreationStatus(true);
    }

    return (
        <div className="Create">
            <form className="CreateForm">
                <h2>Create Account</h2>
                <label>
                    Full Name
                    <input
                        type='text' placeholder='legal name' required
                        value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Email
                    <input
                        type='text' placeholder='email address' required
                        value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password
                    <input
                        type='text' placeholder='password' required
                        value={password} onChange={e => setPassword(e.target.value)} />
                </label>

                <input type='submit' value='Create' onClick={handleCreate} />
                
                {isCreated ? <p>Account Created</p> : null}
            </form>
        </div >
    );

}

export default CreateAcc;