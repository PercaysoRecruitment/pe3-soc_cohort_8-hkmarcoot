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
    // Check if the search input is empty or not
    if (topic) {
      const news = await getNewsData(topic);

      if (news.Response === "False") return;
      else {
        updateCurrentNews(news);
        addTopicToHistory(topic);
        console.log(news);
        // topicInput.value = "";
      }
    } else {
      // The website shows hero and feature sections when currentNews is empty.
      updateCurrentNews("");
    }
  }

  return (
    <div
      className="search-section text-centered tbmargin-30"
      data-testid="search-section-testing"
    >
      <form className="input-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="News Topic Here"
          onChange={(e) => updateTopic(e)}
        ></input>
        <input className="search-btn" type="submit" value="Search"></input>
      </form>
    </div>
  );
}
