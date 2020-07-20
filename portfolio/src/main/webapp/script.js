// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Mi casa es tu casa.', 
      'Faber est suae quisque fortunae.', 
      'Difficulties mastered are opportunities won.', 
      'There is no knowledge that is no power.',
      'The smallest good deed is worth more than the grandest intention.',
      'Action is eloquence.',
      'One who has loved not wisely, but too well.',
      'A rose by any other name, Neal.',
      'Realistics don\'t fear the results of their study.',
      'We feel free when we escape - even if it be but from the frying pan to the fire.'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function onLoadFunction() {
  getComments();
  fetch('/loginstate').then(response => response.json()).then((isLogin) => {
    console.log('check if user login : ', isLogin);
    if (isLogin) {
      const element = document.getElementById('comment-form');
      element.style.display = 'block';
    }
    else {
      const element = document.getElementById('login-link');
      console.log(' current link visibility : ', element.style.display);
      element.style.display = 'block';
      console.log(' current link visibility : ', element.style.display);
    }
  });
}
function getComments() {
  fetch('/comment').then(response => response.json()).then((comments) => {

    console.log('Got here!');
    console.log(comments);
    const listElement = document.getElementById('comments-container');
    listElement.innerHTML = '';
    console.log(comments);
    comments.forEach((comment) => {
        listElement.appendChild(
            createListElement(comment)
        );
    });
  })
}

/** Creates an <li> element containing text. */
function createListElement(post) {
  const liElement = document.createElement('li');
  liElement.innerText = post.content;
  // const liElement = document.createElement('span');
  // liElement.innerText = post.username;
  return liElement;
}
/*
function getRandomQuoteUsingArrowFunctions() {
  fetch('/random-quote').then(response => response.text()).then((quote) => {
    document.getElementById('quote-container').innerText = quote;
  });
}
*/


