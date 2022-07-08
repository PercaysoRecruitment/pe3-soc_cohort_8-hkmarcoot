import { render, screen } from "@testing-library/react";
import ResultSection from "./index.js";

test("Check if Result Section news content have correct className", () => {
  let news = {
    articles: [
      {
        title:
          "Apple and Google face UK probe over mobile browser market 'duopoly'",
        description:
          "The CMA said the tech giants can exercise a 'stranglehold' in the mobile ecosystem, impacting the British tech sector and limiting choice.",
        content:
          "The CMA said the two tech giants can exercise a ‘stranglehold’ in the mobile ecosystem, impacting the British tech sector and limiting choice.\nThe UK’s competition watchdog is considering a market investigation into Google and Apple’s dominant positi... [2505 chars]",
        url: "https://www.siliconrepublic.com/business/apple-google-mobile-browsers-cma-investigation-uk",
        image:
          "https://www.siliconrepublic.com/wp-content/uploads/2022/06/AdobeStock_303064761_Editorial_Use_Only.jpeg",
        publishedAt: "2022-06-10T13:07:59Z",
        source: {
          name: "Siliconrepublic.com",
          url: "https://www.siliconrepublic.com",
        },
      },
    ],
  };
  render(<ResultSection news={news} />);
  const NewsContentTestid = screen.getByTestId("news-content-testing");
  expect(NewsContentTestid).toBeInTheDocument();

  //testing for className
  expect(NewsContentTestid).toHaveClass("margin-left-15");
  expect(NewsContentTestid).toHaveClass("margin-right-40");
  expect(NewsContentTestid).toHaveClass("top-margin-20");
});
