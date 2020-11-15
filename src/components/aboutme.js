import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div className="about-body">
      <Grid className="about-grid">
        <Cell col={6}>
          <h2>About Me</h2>
          
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQG3EgPwNCURnA/profile-displayphoto-shrink_400_400/0?e=1610582400&v=beta&t=aGeGhEAPjRhc9ckQ1UUQrGYXsXamY2L_lDh4_1jgJb4"
            alt="avatar"
            style={{height: '250px'}}
             />
           <p style={{ fontSize: '25px', width: '100%', margin: 'auto', paddingTop: '3.0em'}}>My name is Philip Roush. I was born and raised in Austin, Texas where I currently reside. I graduated from Texas State University with a Bachelor of Science: Resource and Environmental Studies with a minor in Business. I recently graduated from Flatiron School: Full Stack Software Engineering. I'm able to create full stack web applications using Reactjs and Ruby on Rails. *To access my projects, there's a link in the navigation bar*. In my professional career I have worked in Oil and Gas and Golf/Hospitality and Customer Service.</p>

        </Cell>
        </Grid>
        </div>
    )
  }
}

export default About;
