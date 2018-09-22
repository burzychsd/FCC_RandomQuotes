import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './WelcomeLogo.css';

const WelcomeLogo = (props) => {

	const WelcomeButton = styled.button`
	font-family: 'Lato', sans-serif;
	font-size: 1em;
	font-weight: 700;
	color: #555B6E;
	text-align: center;

	width: 150px;
	min-height: 45px;
	margin: 1em auto;

	border: none;
	border-radius: 15px;
	outline: none;
	cursor: pointer;
	background: #FFD6BA;

	-webkit-tap-highlight-color: rgba(0,0,0,0);
	-webkit-tap-highlight-color: transparent;

	-webkit-box-shadow: 10px 9px 20px 0px rgba(0,0,0,0.1);
	-moz-box-shadow: 10px 9px 20px 0px rgba(0,0,0,0.1);
	box-shadow: 10px 9px 20px 0px rgba(0,0,0,0.1);
	`;

	const check = props.classes ? "flipInX fadeOut" : "flipInX";


    return (
    	<div className={props.hide ? "hide" : "WelcomeLogo"}>
			<img className={check} src={logo} alt="logo" style={{ marginBottom: '1em' }} />
			<WelcomeButton className={check} onClick={props.click}>Random Quote</WelcomeButton>
    	</div>
    );
};

export default WelcomeLogo;
