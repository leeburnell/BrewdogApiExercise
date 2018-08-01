//Creates a construct and knows to find by .css class name
const acc = document.getElementsByClassName("accordion_beer");
let i;

//When accordion_beer is used in the HTML more than once, it runs the below
//code to add an active class and open to it's max height
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      } 
    });
  }


//Request is displayed in the console
const request = options => {
  return fetch(options)
    .then((response) => {
        //this gets passed on to other .then() calls
        return response.json();
    })
    .catch(error => console.error(error));
};


const makeRequest = request('https://api.punkapi.com/v2/beers')
   .then(data => { 
		 
const parentContainer = document.getElementById('beers');
			
data.forEach(function(beer){
	
	// Create the li
	const child = document.createElement('li');
	
	// Create the span
	const span = document.createElement('span');
	
	//Create the img
	const image = document.createElement('img');
	
	const paragraph = document.createElement('p');
	
	//Set the source of the image location
	image.src = beer.image_url;
	
	//set the class name of the span
	span.className = "beer__name"
	
	paragraph.className = "beer__description"
	
	//Pull the beer name and put it in the HTML
	span.innerHTML = beer.name;
	paragraph.innerHTML = beer.description;
	
	//Append elements and sets the name
	parentContainer.appendChild(child);
	child.appendChild(span);
	child.appendChild(image);
  child.appendChild(paragraph);
});
 });