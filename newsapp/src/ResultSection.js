export default function ResultSection({ news }) {
  return (
    <div className="result-section">
      <h1>Result Section</h1>
      <div className="result-container">
        {news.articles.map((block, index) => {
          return (
            <div className="result-block" key={index}>
              <p>Title: {block.title}</p>
              <p>{block.content}</p>
              <div className="result-section-container">
                <img src={block.image} alt={block.title} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
