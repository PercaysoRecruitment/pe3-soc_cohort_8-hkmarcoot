import "./styles.css";

import TopBar from "./TopBar";
import SearchSection from "./SearchSection";
import HistorySection from "./HistorySection";
import ResultSection from "./ResultSection";

function App() {
  return (
    <div className="App">
      <TopBar />
      <SearchSection />
      <HistorySection />
      <ResultSection />
    </div>
  );
}

export default App;
