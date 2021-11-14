// querySelector
// const link = document.querySelector(".navbutton"); // finds first one
// const link = document.querySelector("#homebutton"); // id homebutton
// console.log(link);


//querySelectorAll
// const links = document.querySelectorAll(".navbutton");
// console.log(links);



// getElementbyID
// const link2 = document.getElementById('projectsbutton');
// console.log(link2);

// create an element
// const newLink = document.createElement('A');
// newLink.textContent = "Social Media";
// newLink.href = 'https://www.google.com';


const navlink = document.querySelector('.navlinks');
// nav.appendChild(newLink);


// console.log(newLink);

// START OF PORTFOLIO
const newElement = document.createElement('HR');

const about = document.querySelector('#homebutton');
const projects = document.querySelector('#projectsbutton');
const contacts = document.querySelector('#contactbutton');

about.classList.add('menu-button');
projects.classList.add('project-button');
contacts.classList.add('contact-button');

console.log(window); // document part of window

if (window.location.pathname === '/index.html')
{
    newElement.style.width = '18%';
    newElement.style.marginLeft = '1.2%';
}
if (window.location.pathname === '/projects.html')
{
    newElement.style.width = '24.5%';
    newElement.style.marginLeft = '31%';
}
if (window.location.pathname === '/contacts.html')
{
    newElement.style.width = '23.8%';
    newElement.style.marginLeft = '67.2%';
}

navlink.appendChild(newElement);

