// variables and arrayss
let count = 2;
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
    }]


// element declarations
let rightBtn = document.querySelector('.go-right');
let imageDisplay = document.querySelector('#carousel');
let statementDisplay = document.querySelector('.carousel-quote');
let paginator = document.querySelectorAll('.indicators>img')



rightBtn.addEventListener('click', async()=>{
    await slideIn()
    statementDisplay.innerText = carouselImages[count-1].statement
    paginator[count-1].style.backgroundColor="black"
    // imageDisplay.style. backgroundImage = `url('../../assets/carousel_img_${count}.png')`
    setTimeout(()=>{
        imageDisplay.style.backgroundPositionX = "0em"
        imageDisplay.style.transition = "background-position-x 1.2s";}, 200);
count<=2?count++:count=1
console.log(count)
})

// animations
async function slideIn(){
    imageDisplay.style.backgroundImage = `url('../../assets/carousel_img_${count}.png')`
    imageDisplay.style.backgroundPositionX = "80em"
    imageDisplay.style.transition = "background-position-x 0s";
}


