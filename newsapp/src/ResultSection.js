export default function ResultSection({ news }) {
  return (
    <div className="result-section">
      <div className="result-container">
        {news.articles.map((block, index) => {
          return (
            <div className="result-block" key={index}>
              <div className="result-text-container">
                <h1 className="index-number">
                  {index + 1 === 10 ? "10" : "0" + (index + 1)}
                </h1>
                <h2>
                  <span className="result-title underline">TITLE</span>:{" "}
                  {block.title}
                </h2>
                <h3 className="margin-right-40 top-margin-20">
                  {block.content}
                </h3>
                <a
                  className="learn-more-button"
                  href={block.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more...
                </a>
              </div>
              <div className="result-img-container">
                <img src={block.image} alt={block.title} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
