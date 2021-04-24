import React from 'react';
import '../css/App.css';
import '../css/Section1.css';

function Section1() {
    return(
        <div className="section1">
            <img className="section1-illustration" src="https://discord.com/assets/c01c644bc9fa2a28678ae2f44969d248.svg" alt="illustration"/>
            <div className="text-wrapper">
                <h1>Ein Ort nur für dich und deine Leute</h1>
                <p>Discord-Server sind in themenbasierte Kanäle eingeteilt. So kannst du mit anderen arbeiten, Inhalte teilen und über das Tagesgeschehen reden, ohne einen Gruppenchat zuzuspammen.</p>
            </div>
        </div>
    )
}


export default Section1;