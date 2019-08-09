// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
window.addEventListener('load', () => {

const cards = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(function(response){
        console.log(response)
        const topicsArray = ['boostrap', 'javascript', 'jquery', 'node', 'technology']
        topicsArray.forEach(function(topic){
            const articlesArray = response.data.articles[`${topic}`]
            console.log(articlesArray)

            articlesArray.forEach(function(article){
                cards.appendChild(Card(article))
            })
        }) 
    })
    .catch(function(err){
        console.log(err);
    })

    function Card(cardData){

        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const authorName = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imageContainer.classList.add('img-container');

        headline.textContent = cardData.headline;
        image.src = cardData.authorphoto;
        authorName.textContent = `By: ${cardData.authorName}`;

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imageContainer);
        author.appendChild(authorName);
        imageContainer.appendChild(image);

        return card;
    }

})    