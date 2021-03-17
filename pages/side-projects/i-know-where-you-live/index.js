import React, { useState, useEffect } from "react";
import {StyledOhio} from "../../../styles/Ohio.styled"

const API_KEY = "AIzaSyB1OfPBvSQOx3QNmfVvplDjH9HPXM04UF0";
const URL = "https://maps.google.com/maps/api/geocode/json?latlng=";
const OHIO = [40.4173, -82.9071];

export default function WhereAmI() {
    const [address, setAddress] = useState("Loading...");
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [distanceFromOhio, setDistanceFromOhio] = useState(0);
    const [warning, setWarning] = useState("Loading...");

    useEffect(() => {
        if (distanceFromOhio <= 200) setWarning("Danger. It is too late to run.");
        else if (distanceFromOhio <= 500) setWarning("Run. It is not too late to escape yet.");
        else if (distanceFromOhio <= 1000) setWarning("You are not safe. Don't let your guard down.");
    }, [distanceFromOhio])
    useEffect(() => {
        function setPosition({ coords: { latitude, longitude } }) {
            setLongitude(longitude);
            setLatitude(latitude);
            let posToJson = fetch(`${URL}${latitude},${longitude}&key=${API_KEY}`).then((resp) => {
                return resp.json();
            })
            let fetchResults = posToJson.then(({ results: [{ formatted_address }] }) => {
                setAddress(formatted_address);
            });
            let fetchWarning = fetchResults.then(() => {
                let ohioDistance = distance(OHIO[0], OHIO[1], latitude, longitude);
                setDistanceFromOhio(ohioDistance);
                
            })
        }
        navigator.geolocation.getCurrentPosition(setPosition);
        let watcher = navigator.geolocation.watchPosition(
            setPosition,
            err => console.error(err),
            { enableHighAccuracy: true }
        );
        return () => {
            navigator.geolocation.clearWatch(watcher);
        };
    }, []);

    return (
        <StyledOhio>

            <h1>Current Address (estimated): {address}</h1>
            <h1>Latitude: {latitude.toFixed(4) + ' °N'}</h1>
            <h1>Longitude: {longitude.toFixed(4) + ' °W'}</h1>
            <h1>Distance from Ohio: {distanceFromOhio.toFixed(4)} km</h1>
            <h1 className="warning">{warning}</h1>

        </StyledOhio>
    );
}

function distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p)) / 2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}