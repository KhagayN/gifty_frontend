import { Component } from "react";
import * as Survey from "survey-react";
import Amazon from "./Amazon";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
           isSubmitted: false
        }
    }

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
    
    onComplete = (survey, options) => {
        console.log("Survey results: " + JSON.stringify(survey.data));
        fetch(`${this.gifty_backend_url}/collect-feedback`, {
            method: 'POST',
            body: JSON.stringify(survey.data)
        })
        .then(response => response.text())
        .then(data => {
            this.setState({isSubmitted: true})
            console.log(data)
        })
    }

    render() {
        let model = new Survey.Model(this.json);
        Survey.StylesManager.applyTheme("orange");
        console.log(this.state.isSubmitted)
        if (this.state.isSubmitted){
            return(<Amazon/>)
        } else {
            return (<Survey.Survey model={model} onComplete={this.onComplete}/>)
        }        
    }
}

export default Form;
