// Variables and arrays
let count = 2;
let carouselImages = [
    {
        statement: 'Look beyond the ordinary',
        path: '../assets/carousel_img_1.png'
    },
    {
        statement: 'We leave no stone unturned',
        path: '../assets/carousel_img_2.png'
    },
    {
        statement: 'We can and we will',
        path: '../assets/carousel_img_3.png'
    }
];

// Element declarations
let $rightBtn = $('.go-right');
let $imageDisplay = $('#carousel');
let $statementDisplay = $('.carousel-quote');
let $paginator = $('.indicators>img');

// Event listener
$rightBtn.on('click', async () => {
    await slideIn();
    $statementDisplay.text(carouselImages[count - 1].statement);

    setTimeout(() => {
        $imageDisplay.css({
            backgroundPositionX: "0em",
            transition: "background-position-x 1.2s"
        });
    }, 200);

    count <= 2 ? count++ : count = 1;
});

// Animations
async function slideIn() {
    $imageDisplay.css({
        backgroundImage: `url('../../assets/carousel_img_${count}.png')`,
        backgroundPositionX: "80em",
        transition: "background-position-x 0s"
    });
    rotatePaginator();
}

function rotatePaginator() {
    $($paginator[count - 1]).css({
        transform: "rotate(-30deg)",
        filter: "brightness(70%)",
        transition: "all 2s"
    });

    if (count > 1) {
        $($paginator[count - 2]).css({
            transform: "rotate(0deg)",
            filter: "brightness(100%)"
        });
    } else {
        $($paginator[2]).css({
            transform: "rotate(0deg)",
            filter: "brightness(100%)"
        });
    }

    console.log('i work too');
}
