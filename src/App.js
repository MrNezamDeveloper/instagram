import React from 'react';
import Post from './components/Post';
import Faker from 'faker';
import POST_IMG from './img-1.png';
import './App.css';
function getRandomPostTime() {
  return (Math.floor(Math.random() * 10) + 1) + 'h';
}
const App = (props) => {
  return (
    <div>
      <Post avatar={Faker.internet.avatar()} username="MohamadNezam" image={POST_IMG} caption="this is my first caption" time="5h ago" comments={[
        {
          username: Faker.internet.userName(),
          avatar: Faker.internet.avatar(),
          time: getRandomPostTime(),
          comment: Faker.lorem.words(10),
          "is-like": Faker.random.boolean(),
        },
        {
          username: Faker.internet.userName(),
          avatar: Faker.internet.avatar(),
          time: getRandomPostTime(),
          comment: Faker.lorem.words(10),
          "is-like": Faker.random.boolean(),
        },
        {
          username: Faker.internet.userName(),
          avatar: Faker.internet.avatar(),
          time: getRandomPostTime(),
          comment: Faker.lorem.words(10),
          "is-like": Faker.random.boolean(),
        },
      ]} />
      <Post avatar={Faker.internet.avatar()} username="ali" image={Faker.image.image()} caption="this is ali's first caption" time="3h ago" comments={[
        {
          username: Faker.internet.userName(),
          avatar: Faker.internet.avatar(),
          time: getRandomPostTime(),
          comment: Faker.lorem.words(10),
          "is-like": Faker.random.boolean(),
        },

      ]}
      />

    </div>
  );
}

export default App;