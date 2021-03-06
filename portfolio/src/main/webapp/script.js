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
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function getHelloAlecUsingArrowFunctions() {
  fetch('/data').then(response => response.text()).then((quote) => {
    document.getElementById('data-container').innerText = quote;
  });
}

function getjson() {
  fetch('/data').then(response => response.json()).then((data) => {
    console.log(data);
    const dataElement = document.getElementById('data-container');
    dataElement.innerText = '';
    dataElement.appendChild(
        createListElement('First item: ' + data[0]));
    dataElement.appendChild(
        createListElement('Second item: ' + data[1]));
    dataElement.appendChild(
        createListElement('Third item: ' + data[2]));
    dataElement.appendChild(
        createListElement('Fourth item: ' + data[3]));
  });
}
//helper method to create list element
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}