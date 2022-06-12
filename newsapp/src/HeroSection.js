//import newsImage from "./news.jpg";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section-img-mobile"></div>
      <div className="hero-section-text-container top-margin-20">
        <div className="hero-text-inner-container left-right-margin-15px">
          <h2 className=" text-theme-color">A Simple APP</h2>
          <h2>to search and collect</h2>
          <h2>News and Blog Articles</h2>
          <p className="hero-paragraph top-margin-20 bottom-margin-20">
            You can search for current and historic news articles published by
            over 60,000 sources. With this APP, you can also collect the current
            top headlines articles based on the Google News ranking.
          </p>
        </div>
      </div>
      <div className="desktop-image"></div>
    </div>
  );
}
