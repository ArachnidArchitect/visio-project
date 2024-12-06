// Variables and arrays
let count = 2;
const carouselImages = [
    { statement: 'Look beyond the ordinary', path: '../assets/carousel_img_1.png' },
    { statement: 'We leave no stone unturned', path: '../assets/carousel_img_2.png' },
    { statement: 'We can and we will', path: '../assets/carousel_img_3.png' }
];

// Cache jQuery selectors for performance
const $rightBtn = $('.go-right');
const $imageDisplay = $('#carousel');
const $statementDisplay = $('.carousel-quote');
const $paginator = $('.indicators>img');
const $toggle = $('.toggle')
const $main = $('#main')
const $overlay = $('#nav-overlay')

// Event listener
$rightBtn.on('click', async () => {
    await slideIn();
    updateDisplay();
    rotatePaginator();
    count = (count % carouselImages.length) + 1; // Cycles count efficiently
});

$toggle.on('click', () => {
    if ($main.css('display') === 'none') {
        $main.css('display', 'block');
        $overlay.css('display', 'none');
        console.log('i do work');
    } else {
        $main.css('display', 'none');
        $overlay.css('display', 'flex');
    }
});

// Animations
async function slideIn() {
    $imageDisplay.css({
        backgroundImage: `url('../../assets/carousel_img_${count}.png')`,
        backgroundPositionX: "80em",
        transition: "background-position-x 0s"
    });
}

function updateDisplay() {
    $statementDisplay.text(carouselImages[count - 1].statement);
    setTimeout(() => {
        $imageDisplay.css({
            backgroundPositionX: "0em",
            transition: "background-position-x 1.2s"
        });
    }, 200);
}

function rotatePaginator() {
    $paginator.css({ transform: "rotate(0deg)", filter: "brightness(100%)" }); // Reset all
    $paginator.eq(count - 1).css({
        transform: "rotate(-30deg)",
        filter: "brightness(70%)",
        transition: "all 2s"
    });
}
