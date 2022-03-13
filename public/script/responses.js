let edit_items = "http://localhost:5000/edit_items";
// let edit_items = "http://localhost:5000/expired_items";
// let edit_items = "http://localhost:5000/about_us";
// let edit_items = "http://localhost:5000/image_up";
// let edit_items = "http://localhost:5000/product_recommendation";

const edit_items_link = `<a href='${edit_items}'>Edit Items</a>`;
// const couponLink = `<a href='${coupon}'>${coupon}</a>`;

// responseText = `You want to learn about ${courseLink}.
//                   Here is a link to the course: ${couponLink}`;
function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }
  //   Here is a link to the course: ${couponLink}

  // Simple responses
  if (input == "hello" || input == "hi" || input == "watsup") {
    return "Hello there!";
  } else if (input == "edit items") {
    return `Please go to this link ${edit_items_link}
   `;
  } else if (input == "buy products") {
    return `Please go to this link ${amazon_try}
   `;
  } else if (input == "expiring items") {
    return `Please go to this link ${expired_items}
   `;
  } else if (input == "recipe recommendation") {
    return `Please go to this link ${main_recommendation}
   `;
  } else {
    return "Try asking something else!";
  }
}
