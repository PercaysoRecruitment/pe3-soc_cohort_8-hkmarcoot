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

export default function SearchSection({
  updateCurrentNews,
  addTopicToHistory,
}) {
  const [topic, setTopic] = useState("");

  function updateTopic(e) {
    const value = e.target.value;
    setTopic(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // const topicInput = e.target[0];

    const news = await getNewsData(topic);

    if (news.Response === "False") return;
    else {
      updateCurrentNews(news);
      addTopicToHistory(topic);
      console.log(news);
      // topicInput.value = "";
    }
  }

  return (
    <div className="search-section text-centered tbmargin-30">
      <form className="input-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="News Topic Here"
          onChange={(e) => updateTopic(e)}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}
