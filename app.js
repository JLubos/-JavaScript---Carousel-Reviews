//local reviews

const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: 
            "https://res.cloudinary.com/diqqf3eq2/iamge/upload/v1586883334/person-1_rfzshl.jpg",
        text: 
            "I'm baby meggins  rwee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag picked coloring book salvia hoodie",

    },

    {
        id: 1,
        name: "anna johnson",
        job: "web developer",
        img: 
            "https://res.cloudinary.com/diqqf3eq2/iamge/upload/v1586883334/person-1_rfzshl.jpg",
        text: 
            "I'm baby meggins  rwee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag picked coloring book salvia hoodie",
            
    }












]

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set starting item
let currentItem = 0;


//load inital item
window.addEventListener('DOMContentLoaded',function(){
    showPerson();

});


//show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

//show previous person
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//show randoom person
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});