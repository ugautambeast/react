import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [msg, setMsg] = useState('');

    return (
        <div className='container content'>

            <div className='row justify-content-center'>
                <div className='col-md-6 contact-form'>

                    <form className="row g-4 px-5 pb-5 pt-3 my-5">
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            {msg}
                        </Alert>
                        <h4>Message Now</h4>
                        <div className="col-md-12">
                            <input
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                onBlur={() => {
                                    if (username.length === 0) {
                                        setShowAlert(true);
                                        setMsg('Name is required!');
                                    }
                                }}
                                type="text" required className="form-control" placeholder='Name' />
                        </div>

                        <div className="col-md-12">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => {
                                    if (email.length === 0) {
                                        setShowAlert(true);
                                        setMsg('Email is required!');
                                    }
                                }}
                                type="email" required className="form-control" placeholder='Email' />
                        </div>
                        <div className="col-md-12">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onBlur={() => {
                                    if (message.length === 0) {
                                        setShowAlert(true);
                                        setMsg('Message is required!');
                                    }
                                }}
                                placeholder='Message' required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="d-grid gap-2 pt-3">
                            <button class="btn btn-primary" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact