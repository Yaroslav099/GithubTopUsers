import {userInfoQuery} from './queries';

const defaultUrl = 'https://api.github.com/graphql';

const getTopUsers = async () => {
  try{
    const res = await fetch(defaultUrl,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token 505064c995c5fc7edab834a4fa0c2ea02c120de5'
      },
      body: JSON.stringify({query: userInfoQuery})}
    );
    const json = await res.json();
    return json

  }catch(err) {
    console.log(err)
  }
};

export {getTopUsers}