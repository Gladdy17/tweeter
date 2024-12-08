$(document).ready(function() {
  console.log("composer-char-counter.js is loaded");

  // Register an event handler for the textarea element
  $('.new-tweet textarea').on('input', function() {
    const maxLength = 140; // Maximum character limit
    const textLength = $(this).val().length; // Current length of text
    const remainingChars = maxLength - textLength; // Remaining characters

    // Update the counter text dynamically
    const counter = $(this).siblings('.form-actions').find('.counter');
    counter.text(remainingChars);

    // Add or remove the invalid (red) class based on remaining characters
    if (remainingChars < 0) {
      counter.addClass('negative'); // Turn red if over the limit
    } else {
      counter.removeClass('negative'); // Revert to normal if within the limit
    }
  });
});
