const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navOne = document.querySelector('header nav a:nth-of-type(1)');
navOne.textContent = 'Services';

const navTwo = document.querySelector('header nav a:nth-of-type(2)');
navTwo.textContent = 'Product';

const navThree = document.querySelector('header nav a:nth-of-type(3)');
navThree.textContent = 'Vision';

const navFour = document.querySelector('header nav a:nth-of-type(4)');
navFour.textContent = 'Features';

const navFive = document.querySelector('header nav a:nth-of-type(5)');
navFive.textContent = 'About';

const navSix = document.querySelector('header nav a:nth-of-type(6)');
navSix.textContent = 'Contact';

/* CTA Section */

const ctaLeft = document.querySelector('.cta div h1');
ctaLeft.textContent = 'Dom Is Awesome';

const ctaLeftButton = document.querySelector('.cta div button');
ctaLeftButton.textContent = 'Get Started';

const ctaRight = document.querySelector('.cta img');
ctaRight.src = 'img/header-img.png';


/* Middle Section */

const topContentTitle = document.querySelector('.top-content .text-content h4');
topContentTitle.textContent = 'Features';

const topContentSecondTitle = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
topContentSecondTitle.textContent = 'About';

const topContentSecondP = document.querySelector('.top-content .text-content:nth-of-type(2) p');
topContentSecondP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const topContentBio = document.querySelector('.top-content .text-content p');
topContentBio.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const topContentMiddleImage = document.querySelector('img.middle-img');
topContentMiddleImage.src = 'img/mid-page-accent.jpg';

//Bottom Content

const bottomContentLeft = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
bottomContentLeft.textContent = 'Services';

const bottomContentLeftP = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
bottomContentLeftP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const bottomContentMiddle = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
bottomContentMiddle.textContent = 'Product';

const bottomContentMiddleP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
bottomContentMiddleP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const bottomContentRight = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
bottomContentRight.textContent = 'Vision';

const bottomContentRightP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
bottomContentRightP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Contact Section

const contactHeader = document.querySelector('section.contact h4');
contactHeader.textContent = 'Contact';

const contactFirstP = document.querySelector('section.contact p:nth-of-type(1)');
contactFirstP.textContent = '123 Way 456 Street Somewhere, USA';

const contactSecondP = document.querySelector('section.contact p:nth-of-type(2)');
contactSecondP.textContent = '1 (888) 888-8888';

const contactThirdP = document.querySelector('section.contact p:nth-of-type(3)');
contactThirdP.textContent = 'sales@greatidea.io';

//Footer Section

const footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018';
