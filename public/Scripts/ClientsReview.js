//Adding Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    // loop: true,
    breakpoints: {
        1074: {
            slidesPerView: 3,
        },
        710: {
            slidesPerView: 2,
        }

    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});


// Adding Mouse Tracking Effect
let ClientSwiper = document.querySelector('.Clients .swiper')
let ClientCursor = document.querySelector('.clientCursor')

ClientSwiper.addEventListener("mousemove", (e) => {
    ClientCursor.style.display = "flex"
    gsap.to(ClientCursor, {
        x: e.clientX,
        y: e.clientY + 80,
        ease: "ease.out"
    })
})
ClientSwiper.addEventListener("mouseleave", (e) => {
    ClientCursor.style.display = "none"
})


//Generation of Client Reviews
const ClientContainer = document.querySelector('.Clients .swiper-wrapper')
function generateClientReview(name, review, url) {
    return (
        ClientContainer.innerHTML = ClientContainer.innerHTML + `<div
                                class="swiper-slide h-[500px] flex flex-col gap-5 py-16 px-10 border-r-4 border-r-[color:var(--theme-color-2)] items-center">
                                <div class="img rounded-full w-[clamp(3.5rem,20%,100rem)] aspect-square bg-center bg-cover"
                                    style="background-image: url(${url});">
                                </div>
                                <div class="name text-[clamp(1.5rem,2vw,10rem)]">
                                    <p>${name}</p>
                                </div>
                                <div class="para text-white">
                                    ${review}
                                </div>
                            </div>`
    )
}
//Declaring Class ClientReview
class ClientReview {

    constructor(Clientname, review, url) {
        this.Clientname = Clientname
        this.review = review
        this.url = url
    }
}

//Database of Different ClientReviews
const ClientReviews = [
    new ClientReview("Danish", "I recently rented a car and had a fantastic experience. The booking process was straightforward. The car was clean and in excellent condition. Returning the vehicle was quick and hassle-free. Highly recommended for anyone needing a reliable car rental service!", "Images/Danish.avif"),
    new ClientReview("Avinash", "Rented a car and everything went smoothly. Booking online was easy, the car was clean and well-maintained, and the staff were friendly and efficient. Drop-off was quick with no hidden fees. Will definitely use them again!", "Images/Avinash.jpg"),
    new ClientReview("Deepika", "Rented a a car and was thoroughly impressed. Easy booking, spotless car, and friendly staff. They even included a complimentary travel kit! Quick return with no hidden fees. Highly recommend!", "Images/Deepika.jpeg"),
    new ClientReview("Priyanka", "Renting a scooter was a breeze! The website made booking quick and simple, and the scooter was ready for me as soon as I arrived. It was clean, well-maintained. Returning it was just as easy. No hidden fees.", "Images/Priyanka.jpg"),
    new ClientReview("Vivek", "I recently used this webiste to find a driver for a special event, and I couldn't be happier with the experience. The website was user-friendly, making it easy to find and book a driver who met my needs perfectly. The driver was punctual, courteous, and skilled.", "Images/Vivek.avif"),
    new ClientReview("Asees", "I had an outstanding experience with the driver provided. From the moment they arrived, their professionalism was evident. Not only did they navigate through traffic with ease, but they also went above and beyond to ensure my comfort throughout the journey.", "Images/Asees.jpeg"),
]
ClientReviews.forEach(ClientReview => {
    generateClientReview(ClientReview.Clientname, ClientReview.review, ClientReview.url)
})
