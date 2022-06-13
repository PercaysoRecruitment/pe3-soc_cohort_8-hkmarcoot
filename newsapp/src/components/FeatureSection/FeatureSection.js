export default function FeatureSection() {
  return (
    <div>
      <div className="feature-section">
        <h2 className="feature-header">Features</h2>
        <div className="feature-section-img"></div>

        <div className="feature-block-container">
          <div
            className="feature-block feature-boxsdw-blue"
            data-testid="feature-section-bk01-testing"
          >
            <div className="feature-block-text">
              <h4>Worldwide Scale</h4>
              <p>
                Our database contains tens of millions of articles that we have
                collected from over 60,000 sources in 22 languages across 30
                countries. You can filter articles by language, country or both.
              </p>
            </div>
          </div>
          <div
            className="feature-block feature-boxsdw-blue"
            data-testid="feature-section-bk02-testing"
          >
            <div className="feature-block-text">
              <h4>Response Performance</h4>
              <p>
                The response time of the API is very important to us, we do
                everything possible to keep it as small as possible. The average
                response time of the API is between 100 and 200 ms.
              </p>
            </div>
          </div>
          <div
            className="feature-block feature-boxsdw-orange"
            data-testid="feature-section-bk03-testing"
          >
            <div className="feature-block-text">
              <h4>News Articles Data</h4>
              <p>
                We use advanced extraction techniques to retrieve the different
                attributes that make up an article. Data quality is our number
                one concern and we do absolutely everything we can to ensure
                that it is always excellent.
              </p>
            </div>
          </div>
          <div
            className="feature-block feature-boxsdw-orange"
            data-testid="feature-section-bk04-testing"
          >
            <div className="feature-block-text">
              <h4>Easy Integration</h4>
              <p>
                Get API results in JSON format via HTTP GET requests in any
                programming language and easily integrate them into your
                applications.
              </p>
            </div>
          </div>
          <div
            className="feature-block feature-boxsdw-green"
            data-testid="feature-section-bk05-testing"
          >
            <div className="feature-block-text">
              <h4>Live News Articles</h4>
              <p>
                We have created a system that runs continuously to retrieve any
                new article published on the sources we cover. As soon as a new
                article is found it is immediately added to our database and
                accessible through the API.
              </p>
            </div>
          </div>
          <div
            className="feature-block feature-boxsdw-green"
            data-testid="feature-section-bk06-testing"
          >
            <div className="feature-block-text">
              <h4>Historic Data</h4>
              <p>
                The articles stored in our database are never deleted which
                allows you to consult through the API the history of published
                articles that we have stored over the years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
