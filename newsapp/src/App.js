import { useState } from "react";

import "./styles.css";

import TopBar from "./TopBar";
import SearchSection from "./SearchSection";
import HistorySection from "./HistorySection";
import ResultSection from "./ResultSection";

function App() {
  const [currentNews, setCurrentNews] = useState();
  const [topics, setTopics] = useState([]);

  function addTopicToHistory(newTopic) {
    const duplicates = topics.find((topic) => topic === newTopic);

    if (duplicates) return;

    const newList = [...topics, newTopic];
    setTopics(newList);
  }

  function removeTopicFromHistory(index) {
    const newList = [...topics.slice(0, index), ...topics.slice(index + 1)];
    setTopics(newList);
  }

  function updateCurrentNews(newNews) {
    setCurrentNews(newNews);
  }

  return (
    <div className="App">
      <div className="constrain">
        <TopBar />
        <SearchSection
          updateCurrentNews={updateCurrentNews}
          addTopicToHistory={addTopicToHistory}
        />
        <HistorySection
          topics={topics}
          removeTopicFromHistory={removeTopicFromHistory}
        />
        {currentNews && <ResultSection news={currentNews} />}
      </div>
    </div>
  );
}

export default App;
