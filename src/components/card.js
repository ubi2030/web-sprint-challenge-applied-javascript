import axios from "axios";
import { node } from "webpack";

const Card = (article) => {

  const cardWrapper = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const cardContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardAuthorName = document.createElement('span');

  cardWrapper.appendChild(cardHeadline);
  cardWrapper.appendChild(cardAuthor);
  cardAuthor.appendChild(cardContainer);
  cardContainer.appendChild(cardImg);
  cardAuthor.appendChild(cardAuthorName);

  cardWrapper.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthor.classList.add('author');
  cardContainer.classList.add('img-container');
  cardImg.src = article.authorPhoto;

  cardAuthorName.textContent = article.authorName;
  cardHeadline.textContent = article.headline;

  cardImg.addEventListener('click', (e) => {
    console.log(`${article.headline}`);
  })
  // article.forEach(card)

  return cardWrapper;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles/`)
  .then(resp => {
    console.log(`success!`,resp.data.articles.bootstrap);
    for(let i=0; i<resp.data.articles.bootstrap.length; i++){
      document.querySelector(selector).appendChild(Card(resp.data.articles.bootstrap[i]));
    }
    for(let i=0; i<resp.data.articles.javascript.length; i++){
      document.querySelector(selector).appendChild(Card(resp.data.articles.javascript[i]));
    }
    for(let i=0; i<resp.data.articles.technology.length; i++){
      document.querySelector(selector).appendChild(Card(resp.data.articles.technology[i]));
    }
    for(let i=0; i<resp.data.articles.jquery.length; i++){
      document.querySelector(selector).appendChild(Card(resp.data.articles.jquery[i]));
    }
    for(let i=0; i<resp.data.articles.node.length; i++){
      document.querySelector(selector).appendChild(Card(resp.data.articles.node[i]));
    }
    })
  .catch(err => console.error(err))

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
