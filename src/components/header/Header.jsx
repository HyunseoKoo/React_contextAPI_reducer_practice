import React from 'react';
import { FaSun } from 'react-icons/fa';

export default function Header({menu,setMenu}) {
    const onShowMenu = (e) => {
        console.log(e.target.outerText);
        setMenu(e.target.outerText);
    };

    return (
        <header className='header'>
            <div className='header__mode'><FaSun /></div>
            <nav className>
                <ul className='header__menus'>
                    <li onClick={onShowMenu} style={{"border-bottom": menu === "All" ? "solid 1px pink" : "none"}}>All</li>
                    <li onClick={onShowMenu} style={{"border-bottom": menu === "Active" ? "solid 1px pink" : "none"}}>Active</li>
                    <li onClick={onShowMenu} style={{"border-bottom": menu === "Completed" ? "solid 1px pink" : "none"}}>Completed</li>
                </ul>
            </nav>
        </header>
    );
}

