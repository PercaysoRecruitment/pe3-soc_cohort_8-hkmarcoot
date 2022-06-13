import { useState } from "react";

import "../../styles.css";

import TopBar from "../TopBar";
import SearchSection from "../SearchSection";
import HistorySection from "../HistorySection";
import ResultSection from "../ResultSection";
import HeroSection from "../HeroSection";
import FeatureSection from "../FeatureSection";
import FooterSection from "../FooterSection";

function App() {
  const [currentNews, setCurrentNews] = useState();
  const [topics, setTopics] = useState([
    "Tiger Woods",
    "Harry Potter",
    "Elon Musk",
  ]);

  function addTopicToHistory(newTopic) {
    //---------------------Note----------------------//
    //The duplicate checking is an extra function.
    //I tried to make both of the string in .find to be lower case in the duplicate checking
    //but not success yet. The reason is that newTopic is not String type.
    //String() have been used to convert it to be string but the checking have error.
    //
    //
    //UPDATE: Using .toLowerCase() properly solves the problem.
    //
    //-----------------Note End---------------------//
    const duplicates = topics.find(
      (topic) => topic.toLowerCase() === String(newTopic).toLowerCase()
    );

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
        <div className="inner-constrain">
          <TopBar />
          <SearchSection
            updateCurrentNews={updateCurrentNews}
            addTopicToHistory={addTopicToHistory}
          />
          <HistorySection
            topics={topics}
            updateCurrentNews={updateCurrentNews}
            removeTopicFromHistory={removeTopicFromHistory}
          />
          {currentNews && <ResultSection news={currentNews} />}
          {currentNews ? "" : <HeroSection />}
          {currentNews ? "" : <FeatureSection />}
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default App;
