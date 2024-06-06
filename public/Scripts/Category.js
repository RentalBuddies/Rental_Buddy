//Generation of Vehicle Categories for Four Vehicles
const VehicleCategoryContainer = document.querySelector('.vehicle-categories .card-container-four')
//Declaring Class VehicleCategory
class VehicleCategory {

    constructor(category, example, price, seats, doors, url) {
        this.category = category
        this.example = example
        this.price = price
        this.seats = seats
        this.doors = doors
        this.url = url
    }
}
function generateVehicleCategoryFour(category, example, price, seats, doors, url) {
    return (
        VehicleCategoryContainer.innerHTML = VehicleCategoryContainer.innerHTML + `
            <div class="card flex flex-col bg-black lg:w-[350px] h-[450px] sm:px-9 px-4 pt-12 pv-5 relative z-10 w-full">
                        <div class="text flex w-full h-1/2  justify-between items-center">
                            <div class="type w-1/2 h-full">
                                <p class="text-3xl font-extrabold">${category}</p>
                                <p class="text-xl">${example}</p>
                                <button class="bg-[color:var(--category-theme-1)] text-white text-center text-xl                                           px-5 py-2 mt-4">From <div><span class="text-2xl">$${price}</span>/Day</div></button>
                            </div>
                            <div class="specifications w-1/2 h-full  text-end text-xl">
                                <p><i class="fa-solid fa-car text-[color:var(--category-theme-1)]"></i> ${seats} seats</p>
                                <p><i class="fa-solid fa-door-open text-[color:var(--category-theme-1)]"></i> ${doors} Doors</p>
                                <p><i class="fa-solid fa-wind text-[color:var(--category-theme-1)]"></i> A/C</p>
                            </div>
                        </div>
                        <div class="image w-full h-1/2 bg-contain bg-center bg-no-repeat "
                            style="background-image: url(${url});">

                        </div>
                    </div>`
    )
}

//Database of Different VehicleCategories
const VehicleCategoriesFour = [
    new VehicleCategory("Economy", "Maruti Suzuki and Similar", "25", "5", "4", "Images/Dezire.png"),
    new VehicleCategory("EV", "Tata Punch and Similar", "55", "5", "4", "Images/PunchEvUpdated.png"),
    new VehicleCategory("SUV", "Fortuner and Similar", "60", "7", "4", "Images/FortunerWhiteUpdated.png"),
    new VehicleCategory("Offroad", "Thar and Similar", "70", "4", "4", "Images/TharUpdated.png"),
    new VehicleCategory("Luxury", "Bentley and similar", "100", "4", "4", "Images/Bentley.png"),
    new VehicleCategory("Premium", "BMW and Similar", "200", "2", "2", "Images/BMW.png"),
    // new VehicleCategory("Hoor","European and Similar","1000","2","4","Images/Dani.jpg")
]
VehicleCategoriesFour.forEach(VehicleCategory => {
    generateVehicleCategoryFour(VehicleCategory.category, VehicleCategory.example, VehicleCategory.price, VehicleCategory.seats, VehicleCategory.doors, VehicleCategory.url)
})




//Generation of Vehicle Categories for Two Vehicles
const VehicleCategoryContainerTwo = document.querySelector('.vehicle-categories .card-container-two')
class VehicleCategoryTwo {

    constructor(category, example, price, url) {
        this.category = category
        this.example = example
        this.price = price
        this.url = url
    }
}
function generateVehicleCategoryTwo(category, example, price, url) {
    return (
        VehicleCategoryContainerTwo.innerHTML = VehicleCategoryContainerTwo.innerHTML + `
            <div class="card flex flex-col bg-black lg:w-[350px] h-[450px] sm:px-9 px-4 pt-12 pv-5 relative z-10 w-full">
                        <div class="text flex w-full h-1/2  justify-between items-center">
                            <div class="type w-1/2 h-full">
                                <p class="text-3xl font-extrabold">${category}</p>
                                <p class="text-xl">${example}</p>
                                <button class="bg-[color:var(--category-theme-1)] text-white text-center text-xl                                           px-5 py-2 mt-4">From <div><span class="text-2xl">$${price}</span>/Day</div></button>
                            </div>
                            <div class="specifications w-1/2 h-full  text-end text-xl">
                                <p><i class="fa-solid fa-helmet-safety text-[color:var(--category-theme-1)]"></i> 2 Helmets</p>
                                <p><i class="fa-solid fa-charging-station text-[color:var(--category-theme-1)]"></i> Charging Port</p>
                            </div>
                        </div>
                        <div class="image w-full h-1/2 bg-contain bg-center bg-no-repeat "
                            style="background-image: url(${url});">

                        </div>
                    </div>`
    )
}
const VehicleCategoriesTwo = [
    new VehicleCategory("Scooty", "Activa and Similar", "10", "Images/Scooty.png"),
    new VehicleCategory("Bike", "Pulsar and Similar", "12", "Images/Pulsar.png"),
    new VehicleCategory("Sports", "Yamaha R1 and Similar", "30", "Images/YamahaR1.png"),
]

VehicleCategoriesTwo.forEach(VehicleCategory => {
    generateVehicleCategoryTwo(VehicleCategory.category, VehicleCategory.example, VehicleCategory.price, VehicleCategory.seats, VehicleCategory.doors, VehicleCategory.url)
})