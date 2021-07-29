import React from 'react';

function Header(props) {
    return (
        <header>
            <h1>Outsanding Items List: {props.name} items pending</h1>
        </header>
    );

}

export default Header;