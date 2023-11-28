import React from 'react';

function Greeting ({ name }) {
    return (
        <div>
          <h1>
            Hello {name && <span>{name}</span>} ,
            Welcome to the newsletter!
          </h1>
          <p>Thank you for subscribing.</p>
        </div>
        )
};

export default Greeting;