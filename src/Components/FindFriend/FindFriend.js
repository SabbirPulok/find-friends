import React from 'react';
import './FindFriend.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserFriends, faAddressBook, faBriefcase, faDollarSign,faHome } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';

//library.add( faTwitter)

const FindFriend = (props) => {
    const {name,annual_salary,image,company:{cname},address:{street="Nai",city="Nai"}} = props.findfriends;
    const [isFriend,setisFriend] = useState(false);

    let btn;

    if(isFriend)
    {
        btn =(<button className="btn btn-danger" disabled>
             <FontAwesomeIcon icon={faUserFriends} /> Friends
            </button>)
    }
    else
    {
        btn = (<button className="btn btn-primary" onClick={ ()=>{
            props.handleAddFriends(props.findfriends);
            setisFriend(true);
            }  }>
            <FontAwesomeIcon icon={faUserPlus} /> Add Friend
        </button>);
    }
    return (
        <div>
            <div className="col-md-4">
                <div className="card" style={{width: "18rem", height:"32rem"}}>
                    <img src={image} className="card-img-top" style={{height:"200px"}} alt=""/>
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text"><FontAwesomeIcon icon={faBriefcase} /> {cname}</p>
                        <h5 className="card-text"><FontAwesomeIcon icon={faDollarSign} /> {annual_salary}</h5>
                        <p className="card-text"><FontAwesomeIcon icon={faHome} /> {street}, {city}</p>
                    </div>
                    <div className="card-footer">
                        {btn}
                    </div>
                </div>  
            </div>    
        </div>
    );
};
export default FindFriend;