import './App.css';
import * as Survey from "survey-react";
import { React, Component } from "react";

class App extends Component {
  json = {
   elements: 
   [
    { type: "radiogroup", name: "dadTv", title: "Does your dad watch television?", isRequired: true, 
      choices: ["Yes", "No"]},
    { type: "radiogroup", name: "shopFrequency", title: "How often does your dad shop?", isRequired: true, 
      choices: ["All the time", "Sometimes", "My mom shops for him"]},
   { type: "radiogroup", name: "dadWorkPlace", title: "Does your dad work from home?", isRequired: true,
      choices: ["Yes", "No"]},
   { type: "radiogroup", name: "dadBluetooth", title: "Does your dad have bluetooth headphones?", isRequired: true,
      choices: ["Yes", "No"]},
   { type: "radiogroup", name: "dadHealthCareWatch", title: "Does your dad have an electronic health care watch?", isRequired: true,
      choices: ["Yes", "No"]},
   { type: "radiogroup", name: "dadWorkout", title: "Does your dad like working out?", isRequired: true,
      choices: ["Yes", "No"]},
   { type: "radiogroup", name: "dadGlasses", title: "Does your dad wear glasses?", isRequired: true,
      choices: ["Yes", "No"]},
    ]
  };

  onComplete(survey, options) {
   console.log("Survey results: " + JSON.stringify(survey.data));
   // want to collect the survey results into a json to send to the backend.
   fetch('https://gifty-backend.ue.r.appspot.com/collect-feedback', {
      method: 'POST',
      body: JSON.stringify(survey.data)
   })
   .then(response => response.text())
   .then(data => console.log(data)) // want to take this link and present to users.
   ;
  }
  
  render() {
   fetch('https://gifty-backend.ue.r.appspot.com/')
   .then(response => response.json())
   .then(data => console.log(data));

   var model = new Survey.Model(this.json);
   return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
  }
 }

export default App;
