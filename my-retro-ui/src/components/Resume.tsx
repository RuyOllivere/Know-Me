import { Avatar, Checkbox, Fieldset, ProgressBar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs defaultActiveTab="About Me">
      <Tab title="About Me">
        <h3>Hello, I'm Rique!</h3>
        <Avatar
          src="https://avatars.githubusercontent.com/u/200701804?v=4"
          alt="Portrait of Rique"
          size="140px"
        />
        <p>
          I'm a passionate Computer Science and system developer in Senac (And hobby photographer, but that's a secret Shhhh!!!) student eager to learn and grow in the software development world.
          Currently looking for internship opportunities to apply my skills and contribute to real-world projects.
        </p>
        <Fieldset legend="My Journey">
          <p>
            I am fascinated by how technology shapes our world and driven to build software that makes a difference. 
            I'm constantly learning new tools and frameworks, and enjoy tackling challenges that help me improve as a developer.
          </p>
        </Fieldset>
      </Tab>

      <Tab title="Experience & Projects">
        <Fieldset legend="Education">
          <Checkbox readOnly checked>
            Pursuing a Bachelor's degree in Computer Science, focusing on software development, algorithms, and systems design.
          </Checkbox>
        </Fieldset>

        <Fieldset legend="Projects & Internships">
          <Checkbox readOnly checked>
            Developed personal projects using React, Node.js, and TypeScript to improve my front-end and back-end skills.
          </Checkbox>
          <Checkbox readOnly>
            Currently open to internships in software engineering or related fields to gain hands-on industry experience.
          </Checkbox>
        </Fieldset>
      </Tab>

      <Tab title="Skills">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Fieldset legend="Programming Languages & Frameworks">
            <ul>
              <li>JavaScript (ES6+)</li>
              <ProgressBar percent={90} width="200px" />
              <li>TypeScript</li>
              <ProgressBar percent={85} width="200px" />
              <li>React.js & React Native</li>
              <ProgressBar percent={85} width="200px" />
              <li>Node.js</li>
              <ProgressBar percent={70} width="200px" />
              <li>Python</li>
              <ProgressBar percent={65} width="200px" />
            </ul>
          </Fieldset>

          <Fieldset legend="Tools & Technologies">
            <ul>
              <li>Git & GitHub</li>
              <ProgressBar percent={80} width="200px" />
              <li>Docker</li>
              <ProgressBar percent={60} width="200px" />
              <li>REST APIs</li>
              <ProgressBar percent={75} width="200px" />
              <li>SQL & NoSQL Databases</li>
              <ProgressBar percent={70} width="200px" />
            </ul>
          </Fieldset>
        </div>
      </Tab>

      <Tab title="About Me">
        <Fieldset legend="Personal Traits">
          <p>
            I am a curious and motivated learner, passionate about technology and software development. I enjoy working collaboratively and tackling problems creatively. 
            I'm always open to new challenges that help me grow both technically and personally.
          </p>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;
