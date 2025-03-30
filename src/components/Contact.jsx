import React, {useEffect, useState} from 'react';
import '../Contact.css'
import {base_url} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['Loading...'])

    useEffect(() => {
        const storedPlanets = localStorage.getItem("starWarsPlanets");
        const expirationTime = 30 * 24 * 60 * 60 * 1000;

        if (storedPlanets) {
            const { data, timestamp } = JSON.parse(storedPlanets);
            if (Date.now() - timestamp <= expirationTime) {
                setPlanets(data);
                return;
            }
        }

        fetch(`${base_url}/v1/planets`)
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch planets");
                return response.json();
            })
            .then(data => {
                const planetNames = data.map(item => item.name);
                setPlanets(planetNames);
                localStorage.setItem("starWarsPlanets", JSON.stringify({ data: planetNames, timestamp: Date.now() }));
            })
            .catch(error => {
                console.error("Error loading planets:", error);
                setPlanets(["Error loading"]);
            });

    }, []);

    return (
        <form className={'containerContact'} onSubmit={(e) => e.preventDefault()}>
            <label>First Name
                <input type="text" name="firstname" placeholder="Your name.."/>
            </label>

            <label>Last Name
                <input type="text" name="lastname" placeholder="Your last name.."/>
            </label>

            <label>Planet
                <select name="planet">
                    {planets.map(item => <option key={item}>{item}</option>)})
                </select>
            </label>

            <label>Subject
                <textarea name="subject" placeholder="Write something.." style={{height: '200px'}}></textarea>
            </label>
            <button type={'submit'}>Submit</button>

        </form>

    );
};

export default Contact;