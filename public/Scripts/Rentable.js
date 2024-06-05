var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});



// Making Personal Form
const TypeContainer = document.querySelector(".type-category-container")
// function to add User Type
function GenerateUser(id, logo, category, description) {
    return (
        TypeContainer.innerHTML = TypeContainer.innerHTML + `<div class="category bg-white text-black flex flex-col justify-center items-center gap-10 px-[clamp(10px,3vw,10rem)] py-4 lg:w-[400px] w-full rounded-2xl transition-shadow hover:shadow-2xl" id ="${id}">
                    <div class="image">
                        <i class="${logo} bg-[color:var(--theme-color-2)] text-white p-5 rounded-full text-[clamp(1.25rem,2vw,10rem)]"></i>
                    </div>
                    <div class="text">
                        <div class="heading text-center text-[color:var(--theme-color-2)] text-xl">${category}</div>
                        <div class="description break-words text-center">
                            ${description}
                        </div>
                    </div>
                    <div class="button bg-[color:var(--theme-color-2)]  px-4 py-2 rounded-lg text-white cursor-pointer" id="button-${id}">Select
                    </div>
                </div >`
    )
}
// Class UserType
class UserType {
    constructor(id, logo, category, description) {
        this.id = id
        this.logo = logo
        this.category = category
        this.description = description
    }
}
//Database of Different UserTypes
const UserTypes = [
    new UserType("vehicle", "fa-solid fa-car", "Vehicle", "Make your vehicle available to others and join our community today! Registering your vehicle is quick and easy, ensuring you can start sharing and earning in no time."),
    new UserType("driver", "fa-regular fa-id-card", "Driver", "Join our platform today and start driving cars for others! Whether you enjoy driving as a hobby, want to earn extra income, or seek flexible working hours, we have the perfect opportunity for you.")
]
// Adding UserType To HTML
UserTypes.forEach(UserType => {
    GenerateUser(UserType.id, UserType.logo, UserType.category, UserType.description)
})






// function to add input Fields
function GenerateForm(id, type, name, label, x) {
    return (
        x.innerHTML = x.innerHTML + `<div class="w-full mb-5">
    <label for="${id}"
        class="block text-[color:var(--theme-color-2)] text-xl mb-1">${label}</label>
    <input type="${type}" name="${name}" id="${id}" class="w-full bg-transparent border-2 border-[white] min-h-10 rounded-3xl outline-none px-5">
</div>`
    )
}
// Class Field
class Input {
    constructor(id, type, name, label) {
        this.id = id
        this.type = type
        this.name = name
        this.label = label
    }
}

// Making Driver Form
const DriverPersonalFormContainer = document.querySelector("#driver-main .personal .input-fields")
const DriverDocumentFormContainer = document.querySelector("#driver-main .documents .input-fields")
//Database of Different input Fields
const DriverPersonalInputs = [
    new Input("driverNumber", "number", "PhoneNumber", "Phone Number"),
    new Input("driverEmail", "email", "email", "Email"),
    new Input("driverAddress", "text", "Address", "Current Address"),
]
const DriverDocumentsInputs = [
    new Input("driverExperience", "number", "Experience", "Years of Experience"),
    new Input("driverDrivingLicense", "url", "License", "Link of Driving License"),
    new Input("driverPhot", "url", "Passport", "Link of Passport Photo"),
]
// Adding DriverInput To HTML
DriverPersonalInputs.forEach(Input => {
    GenerateForm(Input.id, Input.type, Input.name, Input.label, DriverPersonalFormContainer)
})
DriverDocumentsInputs.forEach(Input => {
    GenerateForm(Input.id, Input.type, Input.name, Input.label, DriverDocumentFormContainer)
})


// Making User Form
const VehiclePersonalFormContainer = document.querySelector("#vehicle-main .personal .input-fields")
const VehcileDocumentFormContainer = document.querySelector("#vehicle-main .documents .input-fields")
console.log(VehiclePersonalFormContainer)
const VehcilePersonalInputs = [
    new Input("userPhone", "number", "usernumber", "Phone Number"),
    new Input("userEmail", "email", "useremail", "Email"),
]
const VehicleDocumentsInputs = [
    new Input("userModel", "text", "CarModel", "Model"),
    new Input("userYear", "number", "CarYear", "Manufacture Year"),
    new Input("userVN", "text", "VN", "Vehicle Number"),
    new Input("userRC", "url", "RC", "RC"),
    new Input("userVp", "url", "VP", "Vehicle Photo"),

]

// Adding VehicleInput To HTML
VehcilePersonalInputs.forEach(Input => {
    GenerateForm(Input.id, Input.type, Input.name, Input.label, VehiclePersonalFormContainer)
})
VehicleDocumentsInputs.forEach(Input => {
    GenerateForm(Input.id, Input.type, Input.name, Input.label, VehcileDocumentFormContainer)
})











// Adding Click Functionality to Button
document.getElementById("button-driver").addEventListener("click", () => {
    document.getElementById("category-main").style.display = "none"
    document.getElementById("driver-main").style.display = "flex"
}
)
document.getElementById("button-vehicle").addEventListener("click", () => {
    document.getElementById("category-main").style.display = "none"
    document.getElementById("vehicle-main").style.display = "flex"
}
)

