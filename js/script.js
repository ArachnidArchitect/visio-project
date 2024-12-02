// variables and arrayss
let carouselImages = [
    {
        statement:'Look beyond the ordinary',
        path:'../assets/carousel_img_1.png'
    },
    {
        statement:'We leave no stone unturned',
        path:'../assets/carousel_img_2.png'
    },
    {
        statement:'We can and we will',
        path:'../assets/carousel_img_3.png'
    },
]
// element declarations
let count = 1;
let rightBtn = document.querySelector('.go-right');
let imageDisplay = document.querySelector('#carousel');
let statementDisplay = document.querySelector('.carousel-quote');


rightBtn.addEventListener('click', ()=>{
   statementDisplay.innerText = carouselImages[count-1].statement
imageDisplay.style. backgroundImage = `url('../../assets/carousel_img_${count}.png')`
count<=2?count++:count=1
console.log(count)
})


