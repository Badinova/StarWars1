import React, {useEffect} from 'react';
import {base_url} from "../utils/constants.js";
import {useState } from 'react';
import {characterDetails} from "../utils/constants.js";


const AboutMe = () => {
    const [hero, setHero] = useState('Loaning...');

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
    .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch hero");
            }
            return response.json();
        })
            .then((data) => setHero(data))
            .catch((error) => {
                setHero({ name: "Error loading data" });
                console.error(error);
            });
    }, []);

    if (hero.name === 'Loading...') {
        return <p>Loading...</p>;
    }

    if (hero.name === "Error loading data") {
        return <p>Failed to load hero data. Please try again later.</p>;
    }

    return (
        <div className="aboutMe">
            <h2>{hero.name}</h2>
            {characterDetails.map(({ label, key, unit }) => (
                <p key={key}>
                    <strong>{label}:</strong> {hero[key]}{unit}
                </p>
            ))}
        </div>
    );
};

export default AboutMe;
