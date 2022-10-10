import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [active, setActive] = useState('1');
    return (
        <div className='bg-dark'>
            <header className=' container d-flex justify-content-between align-items-center text-white py-3'>
                <h5>Uday Gautam</h5>
                <ul className="d-flex align-items-center list-unstyled">
                    <li><Link style={{ color: active === '1' ? 'tomato' : '' }} onClick={() => setActive('1')} to='/' className="text-decoration-none ms-5" href="#">About Me</Link></li>
                    <li><Link style={{ color: active === '2' ? 'tomato' : '' }} onClick={() => setActive('2')} to='/portfolio' className="text-decoration-none ms-5" href="#">Portfolio</Link></li>
                    <li><Link style={{ color: active === '3' ? 'tomato' : '' }} onClick={() => setActive('3')} to='/contact' className="text-decoration-none ms-5" href="#">Contact</Link></li>
                </ul>
            </header>
        </div>
    )
};

export default Header;