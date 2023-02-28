import React from "react";

function About(props) {
    return (<>
        <ul>
            {props.data.map((item, index) => (<li key={index}>{`${item.firstName} ${item.lastName}`}</li>))}
        </ul>
    </>);
}

export default About;