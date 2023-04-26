import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function Car(props) {
    return <h2>Hi, i'm a { props.brand.name } { props.brand.model }!</h2>
}

function Garage() {
    const carInfo = { name:"Ford", model:"Mustang"}
    return (
        <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Garage />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
