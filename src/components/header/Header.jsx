import React from 'react';
import { FaSun } from 'react-icons/fa';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__mode'><FaSun /></div>
            <nav className>
                <ul className='header__menus'>
                    <li>All</li>
                    <li>Active</li>
                    <li>Completed</li>
                </ul>
            </nav>
        </header>
    );
}

