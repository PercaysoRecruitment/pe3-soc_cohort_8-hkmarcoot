# Percayso Programming Exercise 3

## Planning

1. It is mobile responsive
2. It has search area
3. It contains search history
4. It displays title, text (description & content), url, image, date, source
5. It has unit tests
6. CSS Styling

## Outcome

The website: https://newsapp-marco-tsang.netlify.app <br/><br/>
:white_check_mark: It is mobile responsive.<br/>
       It has mobile & desktop version, and I have tested them in my phone and pc. For desktop version, there is additional top-menu on top right corner, so it provides more information and looks more accomplished when it is opened in pc.<br/><br/>
:white_check_mark: It has search area.<br/>
       A search bar with search button is created. It is responsive to the width of the browser.<br/><br/>
:white_check_mark: It contains search history.<br/>
       It will record what the user had submitted from the search bar, and show them in little tags below the search bar. (PROBLEM SOLVED: The tags are functioning now. Before that, user needs to press the tag two times to let the app search the same topic again.)<br/><br/>
:white_check_mark: It displays title, content, url, and image.<br/>
       After looking into the data fetching from gnew.io, I decided to only include title, content, url, and image into the website, so it looks more clean and tidy.<br/><br/>
:white_check_mark: It has unit tests.<br/>
       14 unit tests are included with the website. Please be careful that do not run the test too many times since there is query limit of 100 requests per day in gnew.io.<br/><br/>
:white_check_mark: CSS Styling.<br/>
       The title, content, url, and image are well structured so it looks nice for users using phone or pc. Hero section and feature section are with style to give a great impression to users.

### ↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Original Description ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

## Brief

Create a website that gets news from the GNews api:

    https://gnews.io/?ref=apilist.fun

Your website must:

1. Include a search area
2. Include a results area
3. Include tests
4. Be hosted on a publicly accessible URL, so we can see it working

You are free to choose:

1. How to style all aspects of the page.
2. What language and framework to use.

We are looking to understand your approach to solving this problem as much as the actual technical solution. Add comments to your code to help us understand your thinking.

Googling syntax is allowed, googling solutions is not.

## Submitting your solution

Please commit your solution within the time frame given to you, even if your solution is not complete. We will be interested in seeing how you approached the problem.

## Extra credit

If you're in the mood for showboating, plese feel free to show us what else you can do. E.g. you could automate tests for your solution.
