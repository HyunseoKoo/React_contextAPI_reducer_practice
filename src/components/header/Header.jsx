import React from 'react';
import { FaSun } from 'react-icons/fa';

export default function Header({setMenu}) {
    const navMenu = ["All", "Active", "Completed"];
    const onShowMenu = (e) => {
        setMenu(e.target.outerText);
    };

    return (
        <header className='header'>
            <div className='header__mode'><FaSun /></div>
            <nav className>
                <ul className='header__menus'>
                    {navMenu.map((menu)=>(
                        <li onClick={onShowMenu} style={{"border-bottom": menu === {menu} ? "solid 1px pink" : "none"}}>{menu}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

