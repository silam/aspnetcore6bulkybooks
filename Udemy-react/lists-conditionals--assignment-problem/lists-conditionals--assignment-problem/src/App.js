import React, { Component } from 'react';
import './App.css';
import './CharComponent.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


const ValicationComponent = (props) =>
{
 if ( props.textlength <= 5)
    return <div>
          <label>Text is too short</label>
    </div>;
  else
    return <div>
      <label>Text is too long</label>
    </div>
}

const OutputText = (props) =>
{
  return  <div>
            <label>{props.textlength}</label>
          </div>;
}


////////////////////////////////////////////
const CharComponent = (props) =>
{ 

  var textarray = props.text.split("");
  var textremap = textarray.map(e => {
    return <div className="CharComponent" onClick={props.click(e)} >{e}</div>
  })
  
  return (
          <div>
            {textremap}
            
          </div>
          );
  
}
//////////////////////////////////////////////



class App extends Component {

  // state = {
  //   textlength: '',
  //   text: ''
  // }

  // textChangeHandler = (event) =>
  // {
  //   this.setState({textlength: event.target.value.length, 
  //           text: event.target.value})
  // }

  // RemoveChar = (c) =>
  // {
  //   var textlen = this.state.textlength - c.target.value.length;


  //   // we remove event.target.value when click on it
  //   this.setState({textlength: textlen, text: "remove"})
  // }





  state = {
    userInput : ''
  }



  inputChangeHandler = (event)=>
  {
    this.setState({userInput: event.target.value})
  }


  deleteCharHandler = (index) =>{
      const text = this.state.userInput.split('');
      text.splice(index,1);

      const updatedText = text.join('');

      this.setState({userInput: updatedText});
  }



  render() {


    const charList = this.state.userInput.split('').map((ch, index)=>{
      return <Char character={ch} 
        key={index}
         clicked={() => this.deleteCharHandler(index)}/>
    }

    );

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <br/>
        <input type="text" 
          onChange={this.inputChangeHandler} 
          value={this.state.userInput} />
       
       <p>{this.state.userInput}</p>


        <Validation inputLength={this.state.userInput.length} >

        </Validation>
        {charList}
        {/* <OutputText textlength={this.state.textlength} />

        <ValicationComponent textlength={this.state.textlength} />

        <CharComponent text={this.state.text} click={c=>this.RemoveChar.bind(this, c)} /> */}
      </div>
    );
  }
}

export default App;
