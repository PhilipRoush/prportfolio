import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQG3EgPwNCURnA/profile-displayphoto-shrink_400_400/0?e=1610582400&v=beta&t=aGeGhEAPjRhc9ckQ1UUQrGYXsXamY2L_lDh4_1jgJb4"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Philip Roush</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>Experienced in Ruby on Rails and React/JavaScript based programming with a background in Oil and Gas and Hospitality/Customer Service. Ability to create a full stack web application from scratch using cross-platform coding languages-- individually and/or as member of a team. With a background in the Hospitality and Customer Service, it has provided diverse and strong interpersonal skills that will positively impact a teams cohesiveness and productivity. Excels in giving input when appropriate, but recognizes the importance of effective listening and how crucial it also is to efficacious workplace communication.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Lives-in</h5>
            <p>Austin, Texas</p>
            <h5>Phone</h5>
            <p>(512)963-2830</p>
            <h5>Email</h5>
            <p>Roush.Philip@Gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              
              endYear={2016}
              schoolName="Texas State University"
              schoolDescription="Bachelor of Science: Geography: Resources and Environmental Studies with Minor in Business"
               />

               <Education
                 
                 endYear={2020}
                 schoolName="Flatiron School"
                 schoolDescription="Full Stack Software Engineering"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Valet Manager/Golf Services/Member Services"
              jobDescription="Worked for 3 different Discovery Land Company properties. 
              Part of two property opening teams.
              Manager/supervisor of a valet staff of 12-15 employees.
              Took care of members needs and wants.
              Had transportation responsibility, residential upkeep for all members."
              />

              <Experience
                startYear={2013}
                endYear={2017}
                jobName="Visual data/Mapping &amp; Account Payable Specialist"
                jobDescription="Created maps of companies current oil wells.
                Prioritized graphic workload and effectively.
                Processed an average of 100 invoices per week.
                Obtained and entered vendor w-9 and set up of new vendors.
                Responsible for the process of annual filings of 1099s."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={100}
                />
                <Skills
                  skill="CSS"
                  progress={80}
                  />
                  <Skills
                    skill="Ruby"
                    progress={80}
                    />
                     <Skills
                    skill="Rails"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={80}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
