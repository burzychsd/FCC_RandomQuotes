import React, { Component } from 'react';
import axios from 'axios';
import WelcomeLogo from '../../components/WelcomeLogo/WelcomeLogo';
import QuoteBox from '../../components/QuoteBox/QuoteBox';
import QuoteText from '../../components/QuoteText/QuoteText';
import QuoteAuthor from '../../components/QuoteAuthor/QuoteAuthor';
import QuoteButtons from '../../components/QuoteButtons/QuoteButtons';

class App extends Component {

  state = {
    welcomeButton: false,
    toHide: false,
    text: '',
    author: '',
    nextBtn: false
  }


  welcomeBtnClickedHandle = () => {
    this.setState({ welcomeButton: true });
    setTimeout(() => this.setState({ toHide: true, welcomeButton: false }), 1000);
  }

  responseAPIHandle = () => {
    axios.get('https://talaikis.com/api/quotes/random/')
    .then(response => {
      const quote = response.data.quote;
      const person = response.data.author;
      console.log(response);
      console.log(quote);
      console.log(person);
      this.setState({ text: quote, author: person, nextBtn: true })
    });
  }

  render() {
    return (
      <div style={{ 
        display: 'flex', 
        flexFlow: 'column nowrap', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%'}}>
        <WelcomeLogo classes={this.state.welcomeButton} click={this.welcomeBtnClickedHandle} hide={this.state.toHide} />
        <QuoteBox hide={this.state.toHide}>
          <QuoteText text={this.state.nextBtn ? this.state.text : "Click on 'next-button' to generate random quote. Have fun with it!"} />
          <QuoteAuthor author={this.state.nextBtn ? this.state.author : "Sebastian Burzych"} />
          <QuoteButtons clicked={this.responseAPIHandle}/>
        </QuoteBox>
      </div>
    );
  }
}

export default App;
