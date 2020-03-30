// Load your images on page-load

function preloader() {
    const imagesPaths = [
        "./img/solarpower.png",
        "./img/meter.png",
        "./img/washing-machine.png"
    ];

    const images = [ ];

    for (let i = 0; i <imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

window.addEventListener("load", preloader);


/* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. 
*/

const resources = {

    Infrastructure: {
        headingContent: "EXPAND INFRASTRUCTURE",
        bodyText: "Infrastructure plays a major role in reducing rates of clean energy. The factors needed to determine the ideal location of a power plant include lots of open flat areas, lots of sunshine, and no shadowing trees or buildings.",
        imgUrl: "./img/solarpower.jpg",
        imgAlt: "Infrastructure"
    },

    PAYG: {
        headingContent: "PAYG METERS",
        bodyText: "Affordable and reliable rural electrification lies in building sustainable limits and utilizing innovation like PAYG meters to lessen barriers to conveying moderate sustainable power source to those living off-matrix.",
        imgUrl: "./img/meter.jpg",
        imgAlt: "Meter"
    },

    Grids: {
        headingContent: "SOLAR MINI-GRIDS",
        bodyText: "Mini-grids operate in a space between the two; when the population is excessively little or remote for grid extension and independent universes aren't reasonable for bigger power needs. Essentially mini-grids are independent, decentralized electricity networks that can function separately from a national grid.",
        imgUrl: "./img/cells.jpg",
        imgAlt: "Solar Cells"
    }
};

/* 
    Get the reference to your HTML-container that will be dynamically loaded from the resource-object. 
*/

const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

/*
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
    <img src="${imgUrl}" alt="${imgAlt}">
    <p>${bodyText}</p>` 
*/

currentContent.innerHTML = `<h1>${resources.Infrastructure.headingContent}</h1>
                            <img src="${resources.Infrastructure.imgUrl}">
                            <p>${resources.Infrastructure.bodyText}</p>`;

/* 
    Start your handleSelection function here.
*/

function contentLoader(ev) {
    let eventTarget = ev.target.textContent;
    console.log(eventTarget.textContent);

    /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) 
    */

    if (eventTarget === "1") {
        currentContent.innerHTML = `<h1>${resources.Infrastructure.headingContent}</h1>
                                    <img src="${resources.Infrastructure.imgUrl}">
                                    <p>${resources.Infrastructure.bodyText}</p>`;
    } else if (eventTarget === "2") {
        currentContent.innerHTML = `<h1>${resources.PAYG.headingContent}</h1>
                                    <img src="${resources.PAYG.imgUrl}">
                                    <p>${resources.PAYG.bodyText}</p>`;
    } else {
        currentContent.innerHTML = `<h1>${resources.Grids.headingContent}</h1>
                                    <img src="${resources.Grids.imgUrl}">
                                    <p>${resources.Grids.bodyText}</p>`;
    }

    /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. 
    */

    for (let i = 0; i < btns.length; i++) {
        if (btns[i].hasAttribute("id")) {
            btns[i].removeAttribute("id");
        }
    }

  ev.target.id = "active";

}


/* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. 
*/

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", contentLoader)
}
