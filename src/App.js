import logo from './logo.svg';
import './App.css';
import * as Survey from "survey-react";
import { React, Component } from "react";

class App extends Component {
  //Define Survey JSON
  //Here is the simplest Survey with one text question
  json = {
   elements: 
   [
    { type: "text", name: "dadName", title: "What is your dad's name?", isRequired: true},
    { type: "checkbox", name: "shopFrequency", title: "How often does your dad shop?", isRequired: true, 
      choices: ["All the time", "My mom shops for him", "Never", "Complete Functionality"]},
   { type: "text", name: "dadAge", title: "How old is your dad?", isRequired: true },
   { type: "text", name: "dadHomeland", title: "Where is your dad from?", isRequired: true },
   { type: "checkbox", name: "dadTechSavy", title: "Is your dad tech savy?", isRequired: true,
      choices: ["Yes", "No"]},
   { type: "checkbox", name: "dadWorkPlace", title: "Does your dad work from home?", isRequired: true,
      choices: ["Yes", "No"]},
   { type: "checkbox", name: "dadBluetooth", title: "Does your dad have bluetooth headphones?", isRequired: true,
      choices: ["Yes", "No"]},
   { type: "checkbox", name: "dadHealthCareWatch", title: "Does your dad have an electronic health care watch?", isRequired: true,
      choices: ["Yes", "No"]},
   { type: "checkbox", name: "dadWorkout", title: "Does your dad like working out?", isRequired: true,
      choices: ["Yes", "No"]},
   { type: "checkbox", name: "dadGlasses", title: "Does your dad wear glasses?", isRequired: true,
      choices: ["Yes", "No"]},
    ]
  };
 
  //Define a callback methods on survey complete
  onComplete(survey, options) {
   //Write survey results into database
   console.log("Survey results: " + JSON.stringify(survey.data));
  }
  render() {
   //Create the model and pass it into react Survey component
   //You may create survey model outside the render function and use it in your App or component
   //The most model properties are reactive, on their change the component will change UI when needed.
   var model = new Survey.Model(this.json);
   return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
   /*
   //The alternative way. react Survey component will create survey model internally
   return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
   */
   //You may pass model properties directly into component or set it into model
   // <Survey.Survey model={model} mode="display"/>
   //or 
   // model.mode="display"
   // <Survey.Survey model={model}/>
   // You may change model properties outside render function. 
   //If needed react Survey Component will change its behavior and change UI.
  }
 } 

export default App;
