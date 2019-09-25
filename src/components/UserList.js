import React from 'react';
import UserCard from './UserCard';

export default ({data, ...rest}) => (
  <>
  {data.map( ({avatarUrl, name, email, location, url, stars },i) => 
     name ? <UserCard avatarUrl={avatarUrl} name={name} email={email} location={location} url={url} stars={stars}  key={name || i} {...rest} /> : null
  )})}
  </>
)