import React from "react";
import Stories, { WithSeeMore } from "react-insta-stories";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
const StoryContainer = ({ shortsData }) => {
  for (const shortData of shortsData) {
    // console.log(shortData);

    const { userName, userImage, userId, stories } = shortData;
    let storyDataCollection = [];

    for (const story of stories) {
      const data = {
        content: () => (
          <div style={{}}>
            <img src={story.image} alt="" />
            <div className="short-body">
              <div>
                <p>{story.title}</p>
                <div className="blogger-section">
                  <Avatar src={userImage} />
                  <Button variant="outlined">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        ),
      };

      storyDataCollection.push(data);
      console.log(storyDataCollection);
    }
  }

  return (
    <div>
      <Stories
        loop
        keyboardNavigation
        defaultInterval={3000}
        stories={stories}
      />
    </div>
  );
};

export default StoryContainer;

const stories = [
  {
    content: () => (
      <div style={{}}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMzcyMjk2ODItMWI3ZS00Mjg1LTg1ZjgtMGM0ZTZkYjA2YmU2XkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg"
          alt=""
        />
        <div className="short-body">
          <div>
            <p>AC4 black flag</p>
            <div className="blogger-section">
              <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhwOiEQ1Czde5JNWWThdVKW8YrjnJJq1HbjJxeeEQ=s96-c" />
              <Button variant="outlined">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: () => (
      <div style={{}}>
        <img
          src="https://cdn4.idcgames.com/storage/image/1121/game_home_bg_section_2/default.jpg"
          alt=""
        />
        <div className="short-body">
          <div>
            <p>Counter Strike: Global Offensive</p>
            <div className="blogger-section">
              <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhwOiEQ1Czde5JNWWThdVKW8YrjnJJq1HbjJxeeEQ=s96-c" />
              <Button variant="outlined">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
