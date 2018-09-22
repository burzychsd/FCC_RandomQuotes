import React from 'react';
import './QuoteText.css';

const QuoteText = (props) => {
    return (
        <div id="text" className="QuoteText">
        	<p>{props.text}</p>
        </div>
    );
};

export default QuoteText;
