import React, {useEffect, useState} from 'react';
import '../Contact.css'
import {base_url} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['Loading...'])

    async function fetchPlanets() {
        const response = await fetch(`${base_url}/v1/planets`);
        const data = await response.json();
        const planets = data.map((item) => item.name);
        setPlanets(planets);

    }

    useEffect(() => {
        fetchPlanets();
        return() => console.log('Component Contact was unmounted');
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