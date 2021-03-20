import React, { useState, useEffect } from "react";
import StyledValue from '../../../styles/Value.styled';
import Head from 'next/head';
import { UserProfile } from '../../../value-accumulator/UserProfile';

export default function ValueAccumUI() {
    const [userProfile, setUserProfile] = useState();
    const [active, setActive] = useState(false);

    useEffect(() => {
        //gets userprofile on startup, if there is one
    
        let cachedProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (!!cachedProfile) {
            let tempProfile = UserProfile.getUserProfileFromObject(cachedProfile);
            setUserProfile(tempProfile); 
            setActive(true);
        };
    }, [])

    useEffect(() => {
        if (userProfile) {
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
            setTimeout(() => {
                if(active) {
                    let tempProfile = UserProfile.updatePerSecond(userProfile);
                    setUserProfile(tempProfile);
                } else {
                    setUserProfile();
                }
            }, 1000);
        }  
        
    }, [userProfile])

    return (
        <StyledValue>
            <Head>
                <title>Value Accumulator</title>
            </Head>
            <section>
                {!userProfile ?
                    <main>
                        <h1>Value Accumulator</h1>
                        <button onClick={() => {setUserProfile(new UserProfile()); setActive(true);}}>Start</button>
                    </main>
                    : 
                    <main>
                        <h1>{userProfile.username}</h1> 
                        <h1>Value: {userProfile.currentValue}</h1>   
                        <h1>Value change per second: {userProfile.changePerSecond}</h1>
                        <h1>Value change function: {userProfile.valueAccumulators.presentFunctions()}</h1>
                        <button onClick={() => {localStorage.clear(); setActive(false); setUserProfile(); }}>Reset</button>
                    </main>}
            </section>

        </StyledValue>
    )
}