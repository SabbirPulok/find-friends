import React from 'react';
import './MyFriends.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign} from '@fortawesome/free-solid-svg-icons';

const MyFriends = (props) => {
    const myFriend = props.myfriends;
    const totalSalary = myFriend.reduce((total,element)=>total+(element.annual_salary),0)
    // const allNames = myFriend.map(frnd => frnd.name)
    // const allImages = myFriend.map(frnd => frnd.image)

    // allNames = allNames.join("<br>");
    // allImages = allImages.join("<br/>");
    // console.log(allNames);
    return (
        <div className="MyFriend">
            <button className="Title">Friends List</button>
            <br/>
            <h3>Total Friends</h3>
            <h2 style={{color:"blue"}}>{myFriend.length}</h2>
            <h3>Total Salary of Friends</h3>
            <h2  style={{color:"blue"}}>{totalSalary}</h2>
            <ol>
                {
                    myFriend.map(frnd=><li>
                        <img src={frnd.image} style={{height:"100px",width:"85px"}}alt=""/>
                        <p><b>{frnd.name}</b></p>
                        <p><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> {frnd.annual_salary}</p>
                    </li>)
                }
                
            </ol>
               
        </div>
    );
};

export default MyFriends;