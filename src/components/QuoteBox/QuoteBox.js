import React from 'react';
import './QuoteBox.css';

const QuoteBox = (props) => {

    return (
        <div id="quote-box" className={!(props.hide) ? "hide" :  "QuoteBox flipInX"}>
        	{props.children}
        </div>
    );
};

export default QuoteBox;
