import "./styles.css";

import SearchSection from "./SearchSection";
import HistorySection from "./HistorySection";
import ResultSection from "./ResultSection";

function App() {
  return (
    <div className="App">
      <h1>Newsapp</h1>
      <SearchSection />
      <HistorySection />
      <ResultSection />
    </div>
  );
}

export default App;
