import {
  Avatar,
  Fieldset,
  Tab,
  Tabs,
} from '@react95/core';
import me from '../assets/me.jpg';
import back from '../assets/back_rooms.jpg';
import car from '../assets/car.jpg';
import bloody from '../assets/bloody.jpg';
import long from '../assets/long_exposure.jpg';
import cat from '../assets/drug_cat.jpg';

export default function Photos() {
  return (
    <Tabs defaultActiveTab="Photography">
      <Tab title="Photography">
        <h3>Exploring the strange and capturing the moment</h3>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Avatar src={me} alt="me" size="140px" />
            <Avatar src={back} alt="backrooms" size="140px" />
            <Avatar src={car} alt="car" size="140px" />
            <Avatar src={bloody} alt="bloody" size="140px" />
            <Avatar src={long} alt="long exposure" size="140px" />
            <Avatar src={cat} alt="cat" size="140px" />
          </div>
        </div>

        <p>
          Photography is one of my favorite hobbies — especially when I can combine it
          with my love for abandoned places, eerie atmospheres, and urban exploration.
          There's something fascinating about capturing quiet, forgotten spaces and
          transforming them into visual stories.
        </p>

        <Fieldset legend="Why Horror & Urban Exploration?">
          <p>
            I’ve always been drawn to the unknown — abandoned buildings, strange urban
            landscapes, and the unsettling beauty of decay. Horror aesthetics and liminal
            spaces inspire my creativity, and photography allows me to preserve that mood.
            Whether it’s an empty hallway or a foggy street, I enjoy finding mystery in
            the everyday.
          </p>
        </Fieldset>
      </Tab>

      <Tab title="A human">
        <Fieldset legend="More Than a Developer">
          <p>
            Outside of code, I’m a visual storyteller. Photography, especially when it
            blends with horror or surrealism, gives me a way to express a different side
            of myself. I love experimenting with light, perspective, and themes that make
            people feel something — even if it's a little uncomfortable.
          </p>
          <p>
            I'm also studying Computer Science, with the goal of building tools and
            experiences that are both functional and creatively rich. I'm currently open
            to internship opportunities where I can grow as a developer while bringing my
            unique perspective to the team.
          </p>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}
