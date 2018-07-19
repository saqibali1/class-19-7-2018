
let celeberities = [
    {
        name: "Abdul Sattar Edhi",
        title: "Founder, Edhi Foundation",
        readMoreUrl: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
        imgPath: "img2.jpg",
        quote: "No Religion iss higher than humainty"

    },
    {
        name: "Arfa Kareem",
        title: "The youngest Microsoft certified Professional Arfa Karim",
        readMoreUrl: "https://en.wikipedia.org/wiki/Arfa_Karim",
        imgPath:"arfa.jpg",
        quote: ""
    },
    {
        name:"Muhammad Ali Jinnah",
        title: "The Founder of Pakistan",
        imgPath:"img3.png",
        quote:"Failure is a world unknown to me.",
    }
  
]


function initializer(){

    let bodyEl = document.querySelector("body");
    for (let i=0; i<celeberities.length; i++){
        // console.log(celeberities[i]);
        bodyEl.innerHTML += "<div class='celebrity-img-div' style='background-image:url(images/" + celeberities[i].imgPath+")'></div>" + celeberities[i].name ;
        // bodyEl.innerHTML  += celeberities[i].name;
               
    }
    
}


