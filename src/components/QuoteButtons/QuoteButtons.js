import React from 'react';
import styled from 'styled-components';
import tweetBtn from './twitter.svg';
import nextBtn from './next.svg';

const QuoteButtons = (props) => {

	const ActionBtn = styled.button`
	width: 50px;
	height: 50px;
	background: #555B6E;
	border: none;
	border-radius: 5px 5px 0px 0px;
	outline: none;
	cursor: pointer;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	-webkit-tap-highlight-color: transparent;
	`;

    return (
        <div style={{ position: 'absolute', bottom: '0', left: '2em', display: 'flex', justifyContent: 'flex-start'}}>
			<ActionBtn style={{ marginRight: '0.5em', padding: '0.5em' }}>
				<a id="tweet-quote" href="twitter.com/intent/tweet"><img src={tweetBtn} alt="twitter"/></a>
			</ActionBtn>
			<ActionBtn onClick={props.clicked} id="new-quote" style={{ marginLeft: '0.5em', padding: '1em' }}>
				<img src={nextBtn} alt="next"/>
			</ActionBtn>
        </div>
    );
};

export default QuoteButtons;
