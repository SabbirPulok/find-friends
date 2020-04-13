import React from 'react';
import './Header.css'
//import logo from 
const Header = () => {
    return (
        <div className="d-flex bd-highlight mb-3 Header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeIyGBJvKIvDFLSidyhCp9qTH8pnfEo2zx5KwF9Ur6UhgXkfoO&usqp=CAU"
             alt=""/>
             <a className="ml-auto p-2 bd-highlight" href="/">SabbirPulok</a>
        </div>
    );
};

export default Header;