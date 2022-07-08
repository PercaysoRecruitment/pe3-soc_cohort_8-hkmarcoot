export default function TopBar() {
  return (
    <div className="top-bar">
      <h1>
        <span className="header-less-weight">Your</span> News App
      </h1>
      <ul className="top-menu">
        <a
          className="top-menu-btn"
          href="https://gnews.io/docs/v4#search-operators"
          target="_blank"
          rel="noreferrer"
        >
          <li>Tutorial</li>
        </a>
        <a
          className="top-menu-btn"
          href="https://gnews.io/"
          target="_blank"
          rel="noreferrer"
        >
          <li>About</li>
        </a>
        <a
          className="top-menu-btn"
          href="https://linktr.ee/hkmarcoot"
          target="_blank"
          rel="noreferrer"
        >
          <li>Contact Me</li>
        </a>
      </ul>
    </div>
  );
}
