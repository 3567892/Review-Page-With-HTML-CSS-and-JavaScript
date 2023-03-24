const reviews = [
    {
        id : 1,
        name: 'Pokuaah Adjei',
        job : "Student",
        img: "https://lh3.googleusercontent.com/3o9bMmT0zptJtPf6E78lqH5PaZ0qpF5AFfotXiwPUWjU4x5MZxlDvElK9xyPT6veUG0=w2400",
     text: "I am a Computer Scinece major at Concordia College.I am currently studying Computer Science."
    },
{
        id : 2,
        name: 'Akua Adjei',
        job : "Web Developer",
        img: "https://lh3.googleusercontent.com/CIDQ3oKh19DDIByxcFwxc8xYGXbfmaY65S5Cyzjr_wpGv5FFv0FuwHYz3VwLuFXpZ3E=w2400",
        text: " I am currently working as a Web Developer in one of the biggest companies in the world"
    },
    {
        id : 3,
        name: 'Jay Adjei',
        job : "Software Developer",
        img: "https://lh4.googleusercontent.com/GhomCsNKDn62J679cWV0mvGl2AmekSL6nQiBz3bIp_IqdNva_hUG_5NZTCr_l_xrhsk=w2400",
        text: " I code the best in JavaScript"
    },
{  id:4,
    name : "Akua Adjei",
    job: " UX Designer",
    img: " https://lh5.googleusercontent.com/_PJ_VZ7h1RFGjtpq73NaoKreOLvysuwWr__PZu6NDP0kBYLL8Ct5EbvA1heuDU-WoG4=w2400",
    text: "I work as a UX designer. I have worked with a lot of big companies such as Google,Microsoft,and others."
}

];

//select items
const img = document.getElementById('the-image');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const randomButton = document.querySelector('.random-button');

// set starting index

let currentIndex = 0;

// load intial item

window.addEventListener("DOMContentLoaded",function(){
showPerson(currentIndex);
});


function showPerson(person){
    const item = reviews[person];
img.src =item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
}

prevButton.addEventListener('click',function(){
    currentIndex--;
    if(currentIndex <0){
        currentIndex=reviews.length-1;
    }
    showPerson(currentIndex);
   
});
nextButton.addEventListener('click',function(){
    currentIndex++;
    if(currentIndex > reviews.length-1){
        currentIndex=0;
    }
    showPerson(currentIndex);
});

randomButton.addEventListener('click', function(){
    currentIndex =Math.floor(Math.random()*reviews.length);
    showPerson(currentIndex);
});
