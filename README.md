Tweeter
Tweeter is a simple, single-page Twitter clone that focuses on front-end development practices, responsive design, and asynchronous behavior with Ajax requests. It allows users to compose tweets, dynamically load them, and display them in a clean, minimalistic interface without page reloads—mimicking the experience of Twitter on a very small scale.


Tweeter was built as a front-end project to practice HTML, CSS, JavaScript, jQuery, and Ajax, along with a Node.js and Express back-end. The goal was to create a minimal version of a Twitter feed where users can:

- Compose new tweets from a form.
- View a feed of existing tweets.
- See the time elapsed since each tweet was posted.
- Enjoy a responsive design suitable for different screen sizes.


<h2>Few Features</h2>

- Form Validation: Users are alerted if they try to submit an empty tweet or exceed the character limit of 140.
- Escaping User Input: All user-generated content is safely escaped to prevent XSS attacks.
- Dynamic Updates: After posting a new tweet, the tweet list updates instantly.
- Responsive Layout: The layout adapts to desktop and mobile views.


<h2>Stack</h2>
- Front-End: HTML5, CSS3, jQuery, AJAX
- Back-End: Node.js, Express
  
Libraries & Tools:
- timeago.js for time formatting
- Normalize.css for CSS resets
- Font Awesome for icons

<h2>How to Use</h2>
  
- Open your browser and navigate to http://localhost:8080.
- Compose a new tweet in the text area and click Tweet.
- Tweets will appear below the form, with the newest tweets at the top.
- Character count updates dynamically as you type.
- If the tweet is empty or exceeds 140 characters, an error message is displayed until corrected.
