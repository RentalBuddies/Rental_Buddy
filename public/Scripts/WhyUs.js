//Generating WHY US Points
const PointContainer = document.querySelector('.points-container')
function generatePoints(heading, description, iconClass) {
    return (
        PointContainer.innerHTML = PointContainer.innerHTML + `
        <div class="point flex gap-4 lg:w-[400px] m-2">
                        <div class="logo-container justify-center items-start ">
                            <div class="point-logo bg-[color:var(--theme-color-2)] w-[50px] aspect-square rounded-full flex justify-center items-center text-white">
                                <i class=" ${iconClass} text-[clamp(1.25rem,1.75vw,10rem)]"></i>
                            </div>
                        </div>
                        <div class="point-text">
                            <div class="point-heading text-[clamp(1.25rem,1.75vw,10rem)]">
                                ${heading}
                            </div>
                            <div class="point-description">
                                ${description}
                            </div>
                        </div>
                    </div>`
    )
}
//Declaring Class Point
class Point {

    constructor(heading, description, iconClass) {
        this.heading = heading
        this.description = description
        this.iconClass = iconClass
    }
}
//Database of Different Points
const Points = [
    new Point("Outstanding Services", "Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque.", "fa-regular fa-thumbs-up"),
    new Point("Name for Quality Vehicles", "Maecenas lobortis vestibulum ipsum vitae pellentesque. Sed malesuada, neque quis tincidunt suscipit, lorem lectus rutrum lacus, a iaculis ipsum eros sed ipsum.", "fa-solid fa-award"),
    new Point("GPS on Every Car!", "Sed malesuada, neque quis tincidunt suscipit, lorem lectus rutrum lacus, a iaculis ipsum eros sed ipsum. Sed scelerisque massa ut nibh tincidunt, eget pellentesque.", "fa-solid fa-map-location-dot"),
    new Point("Baby Chairs/Booster Seats", "Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque.", 'fa-solid fa-baby-carriage'),
    new Point("Experienced Drivers", "Sed malesuada, neque quis tincidunt suscipit, lorem lectus rutrum lacus, a iaculis ipsum eros sed ipsum. Sed scelerisque massa ut nibh tincidunt", "fa-solid fa-id-card"),
    new Point("24 Hours Support", "Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada, neque quis tincidunt suscipit", "fa-solid fa-headset")
]
Points.forEach(point => {
    generatePoints(point.heading, point.description, point.iconClass)
})