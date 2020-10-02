// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


function articleCreator(headline, image, name) {

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.addEventListener('click', (e) => {
        console.log(headlineDiv)
    });

    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = headline;
    cardDiv.appendChild(headlineDiv);

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    cardDiv.appendChild(authorDiv);

    const authorImgDiv = document.createElement('div');
    authorImgDiv.classList.add('img-container');
    authorDiv.appendChild(authorImgDiv);

    const authorImg = document.createElement('img');
    authorImg.src = image;
    authorImgDiv.appendChild(authorImg);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `By ${name}`;
    authorDiv.appendChild(nameSpan);

    return cardDiv;
}

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        res.data.articles.bootstrap.forEach((data) => {
            cardContainer.append(articleCreator(data.headline, data.authorPhoto, data.authorName));
        });
        res.data.articles.javascript.forEach((data) => {
            cardContainer.append(articleCreator(data.headline, data.authorPhoto, data.authorName));
        });
        res.data.articles.jquery.forEach((data) => {
            cardContainer.append(articleCreator(data.headline, data.authorPhoto, data.authorName));
        });
        res.data.articles.node.forEach((data) => {
            cardContainer.append(articleCreator(data.headline, data.authorPhoto, data.authorName));
        });
        res.data.articles.technology.forEach((data) => {
            cardContainer.append(articleCreator(data.headline, data.authorPhoto, data.authorName));
        });
    })
    .catch(err => {
        console.log('this is an error', err)
    })