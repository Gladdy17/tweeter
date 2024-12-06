$(document).ready(function () {
  // Function to escape potentially unsafe text
  const escapeText = (text) => {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  };

  // Function to create a single tweet element
  const createTweetElement = function (tweet) {
    const $tweet = $(`
      <article class="tweet">
        <header>
          <div class="tweet-avatar">
            <img src="${tweet.user.avatars}" alt="User Avatar">
          </div>
          <div class="tweet-user-info">
            <h3>${escapeText(tweet.user.name)}</h3>
            <p>${escapeText(tweet.user.handle)}</p>
          </div>
        </header>
        <div class="tweet-content">
          <p>${escapeText(tweet.content.text)}</p>
        </div>
        <footer>
          <span>${timeago.format(tweet.created_at)}</span>
          <div class="tweet-actions">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
    `);
    return $tweet;
  };

  // Function to render multiple tweets
  const renderTweets = function (tweets) {
    const $tweetsContainer = $(".tweets-container");
    $tweetsContainer.empty(); // Clear the container before appending new tweets
    tweets.reverse().forEach((tweet) => {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.append($tweet);
    });
  };

  // Function to load tweets from the server
  const loadTweets = function () {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        renderTweets(tweets); // Pass tweets to renderTweets
      },
      error: (err) => {
        console.error("Error loading tweets:", err);
      },
    });
  };

  // Form submission event handler with validation
  $("form").on("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const $textarea = $(this).find("textarea");
    const tweetContent = $textarea.val().trim();

    // Hide the error message element before validation
    $(".error-message").slideUp();

    // Validation: Check for empty tweet
    if (!tweetContent) {
      $(".error-message")
        .text("🚫 Error: Tweet content cannot be empty!")
        .slideDown();
      return; // Stop form submission
    }

    // Validation: Check for tweet exceeding character limit
    if (tweetContent.length > 140) {
      $(".error-message")
        .text("🚫 Error: Tweet content exceeds 140 characters!")
        .slideDown();
      return; // Stop form submission
    }

    // Serialize form data and send it to the server
    const formData = $(this).serialize();
    $.post("/tweets", formData)
      .done(() => {
        // Clear the form input and reload tweets after successful submission
        $textarea.val(""); // Clear the textarea
        loadTweets(); // Reload tweets
      })
      .fail((err) => console.error("Error submitting tweet:", err));
  });

  // Initial load of tweets
  loadTweets();
});


