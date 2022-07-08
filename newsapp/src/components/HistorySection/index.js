import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

async function getNewsData(topic) {
  const response = await fetch(
    `https://gnews.io/api/v4/search?q=${topic}&token=${API_KEY}`
  );
  const data = await response.json();
  if (!data.errors) {
    return data;
  }
}

export default function HistorySection({
  topics,
  updateCurrentNews,
  removeTopicFromHistory,
}) {
  //console.log(topics);

  const [topic, setTopic] = useState("");
  //---------------------Note----------------------//
  //I encounter a problem here that the topic history
  //cannot react at the first click, the result can only be loaded
  //after the second click.
  //
  //I tried to use setTimeout to let the data have enough time to be saved
  //in useState and run the fetch, but it is not success.
  //
  //I will come back and try when I have enough time before the deadline.
  //
  //
  //UPDATE: The bug is solved by using onMouseOver to update the useState.
  //
  //-----------------Note End---------------------//

  function updateTopic(block) {
    setTopic(block);
  }

  function onClick() {
    //console.log(topic);
    handleSubmit(topic);
  }

  async function handleSubmit(topic) {
    // e.preventDefault();
    // const topicInput = e.target[0];

    const news = await getNewsData(topic.block);

    if (news.Response === "False") return;
    else {
      updateCurrentNews(news);
      console.log(news);
      // topicInput.value = "";
    }
  }

  return (
    <div className="history-section" data-testid="history-section-testing">
      <div className="history-block-container">
        {topics.map((block, index) => {
          return (
            <div className="history-block" key={index}>
              <button
                className="remove-btn"
                onClick={() => removeTopicFromHistory(index)}
              >
                X
              </button>
              <div
                className="history-clickable"
                onMouseOver={() => updateTopic({ block })}
                onClick={() => {
                  // setTopic({ block });
                  // handleSubmit(topic);
                  onClick();
                }}
              >
                <h6 className="history-item">{block}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
