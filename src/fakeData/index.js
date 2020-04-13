import users from './users'

const friends = [...users];

let shuffle = (data) => 
{
    for(let i =data.length; i; i--)
    {
        let j = Math.floor(Math.random()*i);
        [data[i-1],data[j]] = [data[j],data[i-1]];
    }

}

shuffle(friends);

export default friends;