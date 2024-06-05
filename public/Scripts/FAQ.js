const faqContainer = document.querySelector(".faq-container")
// function to add FAQ
function GenerateFAQ(question, answer) {
    return (
        faqContainer.innerHTML = faqContainer.innerHTML + `<div class="query border-b border-b-white border-opacity-55 py-4" >
                        <button class="accordion text-2xl flex justify-between w-full">${question} <i class="fa-solid fa-chevron-down "></i></button>
                        <div class="panel text-xl max-h-0 overflow-hidden">
                            <p>${answer}</p>
                        </div>
                    </div>`
    )
}
// Class FAQ
class FAQ {
    constructor(question, answer) {
        this.question = question
        this.answer = answer
    }
}
//Database of Different FAQs
const FAQs = [
    new FAQ("What documents do I need to rent a car?", "You will need a valid driver's license, a credit card in the renter's name, and a second form of ID such as a passport or national ID card."),
    new FAQ(" What age do I need to be to rent a car?", "The minimum age to rent a car is typically 21, but this can vary by location and car category. Additional fees may apply for renters under 25."),
    new FAQ(" What payment methods do you accept?", "We accept major credit cards, debit cards, and [any other payment methods, e.g., PayPal, digital wallets]. Payment is made through our secure online platform."),
    new FAQ("How do I know the driver is trustworthy?", "Safety is our top priority. All our drivers undergo rigorous background checks, including criminal record checks, driving history reviews, and personal interviews."),
    new FAQ("Can I rent a car for someone else?", "No, the person renting the car must be the one who drives it. However, you can add additional drivers to the rental agreement for a fee."),
    new FAQ("What should I do in case of an accident?", "In the event of an accident, first ensure everyone's safety and contact local authorities. Then, inform our customer service immediately for further instructions.")
]
// Adding Faq To HTML
FAQs.forEach(FAQ => {
    GenerateFAQ(FAQ.question, FAQ.answer)
})

// Adding Animation and Functionality to Accordions
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(accordion => {
    accordion.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        const chevr = this.querySelector("i")
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            chevr.style.rotate = "0deg"
            this.style.color = "white"
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            chevr.style.rotate = "180deg"
            this.style.color = "#d8ab21"
        }
    });
})