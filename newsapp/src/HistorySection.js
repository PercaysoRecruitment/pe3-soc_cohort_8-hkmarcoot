import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

async function getNewsData2(topic) {
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
  console.log(topics);

  const [topic2, setTopic2] = useState("");

  async function onClick(block) {
    setTopic2(block);
    console.log(topic2);
    handleSubmit(topic2);
  }

  async function handleSubmit(topic) {
    // e.preventDefault();
    // const topicInput = e.target[0];

    const news = await getNewsData2(topic.block);

    if (news.Response === "False") return;
    else {
      updateCurrentNews(news);
      console.log(news);
      // topicInput.value = "";
    }
  }

  return (
    <div className="history-section">
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
                onClick={() => {
                  // setTopic({ block });
                  // handleSubmit(topic);
                  onClick({ block });
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
