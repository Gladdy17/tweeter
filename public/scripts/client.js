/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Function to escape potentially unsafe text
const escapeText = (text) => {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  };
  
  // Function to create a single tweet element
  const createTweetElement = function(tweet) {
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
  const renderTweets = function(tweets) {
    const $tweetsContainer = $('.tweets-container');
    $tweetsContainer.empty(); // Clear the container before appending new tweets
    tweets.reverse().forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.append($tweet);
    });
  };
  
  $(document).ready(function() {
    // Test / driver code (temporary). Eventually will get this from the server.
    const tweetData = [
      {
        user: {
          name: "Newton",
          avatars: "https://i.imgur.com/73hZDYK.png",
          handle: "@SirIsaac"
        },
        content: {
          text: "If I have seen further it is by standing on the shoulders of giants"
        },
        created_at: 1461116232227
      },
      {
        user: {
          name: "Descartes",
          avatars: "https://i.imgur.com/nlhLi3I.png",
          handle: "@rd"
        },
        content: {
          text: "Je pense , donc je suis"
        },
        created_at: 1733317176026
      }
    ];
  
    // Render the test data
    renderTweets(tweetData);
  });
  

