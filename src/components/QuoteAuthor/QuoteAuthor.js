import React from 'react';
import './QuoteAuthor.css';

const QuoteAuthor = (props) => {
    return (
        <div id="author" className="QuoteAuthor">
			<p>{props.author}</p>
        </div>
    );
};


export default QuoteAuthor;
