import './App.css';
import { React, Component } from "react";
import Form from './Form'

class App extends Component {

  gifty_backend_url = "https://gifty-backend.ue.r.appspot.com"
  
  render() {
   fetch(this.gifty_backend_url)
   .then(response => response.json())  
   .then(data => console.log(data));

   return (<Form/>);

  }
 }

export default App;
