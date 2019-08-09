// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

window.addEventListener('load', () =>{

const topics = document.querySelector('.topics');



axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(function(response){
        // console.log(response.data);
        response.data.topics.forEach(function(topic){
        topics.appendChild(Tabs(topic))
        })  
    })

    .catch(function(err){
        console.log(err);
        })  


function Tabs(tabData){
    //create new elements
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = tabData;

    return tab
}  

})