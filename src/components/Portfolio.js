import React, { Component } from 'react';
import "./chat.css"

export default class Porfolio extends Component {
  
  render() {
    
    let resumeData = this.props.resumeData;
    return (
      
      <section>
        <div>
  <h1 className='aitext'>AI Chat</h1>
</div>
        
        
        <div class="container">
  
  <p>Hello. I have been coughing and have a high fever</p>
  <span class="time-right">11:00</span>
</div>

<div class="container darker">
  
  <p>Have you completed a COVID-19 test?</p>
  <span class="time-left">11:01</span>
</div>

<div class="container">
  
  <p>I have</p>
  <span class="time-right">11:02</span>
</div>

<div class="container darker">
  
  <p>Okay here are a list of possible illnesses, however I would reccomend booking an Appointment in the apointment section of the website as I am not a reliable source</p>
  <span class="time-left">11:05</span>
</div>
<div class="container darker">
  
  <p>Flu, Stomach flu, Common cold, and viral rhinitis</p>
  <span class="time-left">11:05</span>
</div>

      
<form class="chat" >
              <label for="email">Chat With AI</label>
              <input type="email" id="email" placeholder="Chat!" name="email"></input>
              
            </form>

      
              

      </section>
    

      
      
        );
  }
}