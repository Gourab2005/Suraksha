import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleScroll = () => {
        if (menuActive) {
            setMenuActive(false);
        }
    };

    // Use useEffect to add the scroll event listener
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuActive]);

    return (
        <div>
            <section className="header">
                <NavLink to="/" className="logo">Suraksha</NavLink>

                <nav className={`navbar ${menuActive ? 'active' : ''}`}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                <div
                    id="menu-btn"
                    className={`fas fa-bars ${menuActive ? 'fa-times' : ''}`}
                    onClick={toggleMenu}
                ></div>
            </section>
        </div>
    );
}

export default Navbar;
