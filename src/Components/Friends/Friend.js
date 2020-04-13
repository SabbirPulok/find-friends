import React from 'react';
import './Friend.css';
import MyFriends from '../MyFriends/MyFriends';
import FindFriend from '../FindFriend/FindFriend';
import friends from '../../fakeData';
import { useState } from 'react';

const Friend = () => {

    const [findfriends, setFindfriends] = useState(friends);
    const [myfriends, setMyfriends] = useState([]);

    const handleAddFriends = (frnd) =>
    {
        let updateMyFrnd = [...myfriends, frnd];
        setMyfriends(updateMyFrnd);
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <MyFriends myfriends = {myfriends}></MyFriends>
            </div>
            <div className="col-md-9">
                <div className="row">
                    {
                        findfriends.map(frnd => <FindFriend handleAddFriends={handleAddFriends} findfriends = {frnd}></FindFriend>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Friend;