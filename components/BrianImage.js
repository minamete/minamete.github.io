import React from 'react';

export default function BrianImage({text}) {
    return (
        <div style={{backgroundImage: "url('/aria.jpg')"}}>
            <h1 style={{color:'white'}}>{text}</h1>
        </div>
    );
}

