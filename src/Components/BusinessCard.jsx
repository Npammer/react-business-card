import React from "react";

export default function BusinessCard () {
    return (
        <>
            <img src="../../public/59678082.jpeg" alt="Profile picture" />
            <h1>Nikolai Pammer</h1>
            <h2>Fullstack Developer</h2>
            <h4>Website</h4>
            <div className="linkedin-button">
                <a href="https://www.linkedin.com/in/npammer/" className="linkedin-button">LinkedIn</a>
            </div>
            <h3>About</h3>
            <p>Something about me</p>
            <h3>Interests</h3>
            <p>Something that interests me</p>
            <div className="sosial-media">
                <p>Something</p>
            </div>
        </>
    )
}