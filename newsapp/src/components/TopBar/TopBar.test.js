import { render, screen } from "@testing-library/react";
import TopBar from "./index.js";

test("Check News App Logo", () => {
  render(<TopBar />);
  const LogoElementP1 = screen.getByText(/Your/i);
  const LogoElementP2 = screen.getByText(/News App/i);
  expect(LogoElementP1).toBeInTheDocument();
  expect(LogoElementP2).toBeInTheDocument();
});

test("Check Top Menu", () => {
  render(<TopBar />);
  const TutorialElement = screen.getByText(/Tutorial/i);
  const AboutElement = screen.getByText(/About/i);
  const ContactMeElement = screen.getByText(/Contact Me/i);
  expect(TutorialElement).toBeInTheDocument();
  expect(AboutElement).toBeInTheDocument();
  expect(ContactMeElement).toBeInTheDocument();
});

test("Check Tutorial Link", () => {
  render(<TopBar />);
  expect(screen.getByRole("link", { name: "Tutorial" })).toHaveAttribute(
    "href",
    "https://gnews.io/docs/v4#search-operators"
  );
});

test("Check About Link", () => {
  render(<TopBar />);
  expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
    "href",
    "https://gnews.io/"
  );
});

test("Check Contact Me Link", () => {
  render(<TopBar />);
  expect(screen.getByRole("link", { name: "Contact Me" })).toHaveAttribute(
    "href",
    "https://linktr.ee/hkmarcoot"
  );
});
