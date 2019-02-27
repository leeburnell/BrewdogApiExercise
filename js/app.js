//Creates a construct and knows to find by .css class name
const acc = document.getElementsByClassName("accordion_beer");
let i;

//When accordion_beer is used in the HTML more than once, it runs the below
//code to add an active class and open to it's max height
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
    });
}


//Request is displayed in the console
const request = async options => {
    try {
		const response = await fetch(options);
		//this gets passed on to other .then() calls
		return response.json();
	}
	catch (error) {
		return console.error(error);
	}
};


const makeRequest = request('https://api.punkapi.com/v2/beers')
    .then(data => {

        const parentContainer = document.getElementById('beers');

        data.forEach(function(beer) {

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

    window.onscroll = function() {myFunction()};

    function myFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("nav1").className = "nav-toggle-bar-black";
    } else {
        document.getElementById("nav1").className = "nav-toggle-bar";
    }
    }

    //BurgerMenu.js
    (function() {

        var hamburger = {
          navToggle: document.querySelector('.nav-toggle'),
          nav: document.querySelector('nav'),
      
          doToggle: function(e) {
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
          }
        };
      
        hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
        hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
      
      }());