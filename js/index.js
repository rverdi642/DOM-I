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
let logo = document.getElementById('logo-img');
console.log(logo)
logo.setAttribute('src', siteContent["nav"]["img-src"])
let menu = document.getElementsByTagName["nav"];
menuNav = document.querySelectorAll('a')
console.log(menuNav.length)
menuNav[0].innerHTML = siteContent['nav']['nav-item-1']
menuNav[1].innerHTML = siteContent['nav']['nav-item-2']
menuNav[2].innerHTML = siteContent['nav']['nav-item-3']
menuNav[3].innerHTML = siteContent['nav']['nav-item-4']
menuNav[4].innerHTML = siteContent['nav']['nav-item-5']
menuNav[5].innerHTML = siteContent['nav']['nav-item-6']

let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = (siteContent["cta"]["h1"]);

let ctaTxt1 = document.getElementsByClassName("cta-text")[0];

ctaTxt1.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaTxt1.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let aboutContent = document.querySelector(".top-content .text-content"); 
aboutContent.innerHTML = ("p", siteContent["main-content"]["about-content"])