import React from 'react';
import styled from 'styled-components';

let solo = require('./sound/solo');
let chamber = require('./sound/chamber');
let electronic = require('./sound/electronic');
let code = require('./code/code');


var Content = styled.div`
    .dash {
        opacity: 0.5;
        padding: 2px;
    }

    .flavor {
        font-size: 0.75rem;
        display: inline;
        padding: 4px 4px;
    }

    .year {
        font-size: 0.5rem;
        opacity: 0.75;
        display: inline;
    }

    .title {
        padding: 0px 18px;
        margin: 0px;
        font-size: 1rem;
    }

    .description {
        padding: 0px 18px;
        margin-left: 18px;
        margin-bottom: 0px;
        border-left 1px rgba(0,0,0,0.1);;
    }

    .projectLinks {
        padding-left: 28px;
        a {
            text-decoration: none;
            padding-left: 8px;
            color: black;
            opacity: 0.2;
            transition: opacity 300ms;
            &:hover {
                opacity: 0.75;
            }
    }
`;

let mapper = (prefix) => 
    (s => {
        return (<div key={prefix + s}>
        <h2 className="flavor"><span className="dash">- [</span>{s.flavor}<span className="dash">]</span></h2>
        <span className="year">{s.year}</span>
        <h4 className="title">{s.title}</h4>
        <p className="description">{s.description}</p>
        <div className="projectLinks">
            {Object.keys(s.links).map(key => 
                (<a key={s.title + 'link'} target="_blank" rel="noopener noreferrer" href={s.links[key]} className="projectLink">{key}</a>))}
        </div>
    </div>)});

export var Solo = (props) => (<Content>{solo.map(mapper('solo'))}</Content>);
export var Chamber = (props) => (<Content>{chamber.map(mapper('chamber'))}</Content>);
export var Electronic = (props) => (<Content>{electronic.map(mapper('electronic'))}</Content>);
export var Code = (props) => (<Content>{code.map(mapper('code'))}</Content>);


