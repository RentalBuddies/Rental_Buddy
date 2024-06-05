const PreLoader = document.getElementById("loader")
const main = document.querySelector(".main")

const languages = [
    "ਸੁਆਗਤ ਹੈ",
    "स्वागत आहे",
    "স্বাগত",
    "સ્વાગત છે",
    "ಸ್ವಾಗತ",
    "स्वागत",
    "സ്വാഗതം",
    "येवकार",
    "خوش آمدید",
    "வரவேற்பு",
    "స్వాగతం",
    "स्वागतम्‌",
]

const DelayTime = 1000
const ChangeTime = 125
const LoaderTime = 2 * DelayTime + ChangeTime * languages.length

setTimeout(() => {
    PreLoader.style.top = "-100vh";
    PreLoader.style.borderRadius = "0px 0px 40% 40%"
    PreLoader.innerHTML = ""
    main.style.display = "block"
}, LoaderTime)
function ChangeText(Text) {
    return (
        PreLoader.innerHTML = `<div class="text absolute flex justify-center items-center gap-2">
            <i class="fa-solid fa-circle"></i>
            <h1 class="text-[clamp(3rem,5vw,100rem)]"> ${Text}</h1>
        </div>`
    )
}
let i = 0;
setTimeout(() => {
    setInterval(() => {
        if (i < languages.length)
            ChangeText(languages[i])
        i++
    }, ChangeTime)
}, DelayTime)