$(document).ready(function() {
    console.log("composer-char-counter.js is loaded");
  
    // Register an event handler for the textarea element
    $('.new-tweet textarea').on('input', function() {
      const maxLength = 140;
      const textLength = $(this).val().length;
      const remainingChars = maxLength - textLength;
  
      // Update the counter
      const counter = $(this).siblings('.form-actions').find('.counter');
      counter.text(remainingChars);
  
      // Change the color of the counter if the character limit is exceeded
      if (remainingChars < 0) {
        counter.addClass('invalid');
      } else {
        counter.removeClass('invalid');
      }
    });
  });