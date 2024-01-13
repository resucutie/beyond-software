const fs = require("fs")
const nodepath = require("path")

const phone = "./assets/emojis/phone.svg"
const android = "./assets/emojis/android.svg"
const ios = "./assets/emojis/ios.svg"
const computer = "./assets/emojis/computer.svg"
const windows = "./assets/emojis/windows.svg"
const apple = "./assets/emojis/apple.svg"
const linux = "./assets/emojis/linux.svg"
const terminal = "./assets/emojis/terminal.svg"
const web = "./assets/emojis/web.svg"
const chrome = "./assets/emojis/chrome.svg"
const firefox = "./assets/emojis/firefox.svg"
const tvbox = "./assets/emojis/tvbox.svg"
const roku = "./assets/emojis/roku.svg"
const tvos = "./assets/emojis/tvos.svg"
const console = "./assets/emojis/console.svg"
const selfhost = "./assets/emojis/selfhost.svg"
const proprietary = "./assets/emojis/proprietary.svg"
const freemium = "./assets/emojis/freemiun.svg"
const paid = "./assets/emojis/paid.svg"
const ads = "./assets/emojis/ads.svg"
const resource = "./assets/emojis/resource.svg"
const vr = "./assets/emojis/vr.svg"

async function emojify(path, alt, anysize) {
    const contents = await fs.promises.readFile(nodepath.join(process.cwd(), path), { encoding: 'utf8' })
    return `<span class="custom-emoji${anysize ? " unrestricted" : ""}" ${alt ? `title="${alt}"` : ""}>${contents}</span>`
}

module.exports = async () => {
    return {
        "c-mobile": await emojify(phone, "Avaiable on all mobile platforms", true),
        "c-android": await emojify(android, "Avaiable on Android"),
        "c-ios": await emojify(ios, "Avaiable on iPhone"),
        "c-pc": await emojify(computer, "Avaiable on all desktop platforms"),
        "c-windows": await emojify(windows, "Avaiable on Windows"),
        "c-macos": await emojify(apple, "Avaiable on macOS"),
        "c-linux": await emojify(linux, "Avaiable on Linux"),
        "c-cli": await emojify(terminal, "Is a command line only application"),
        "c-web": await emojify(web, "Avaiable on all browsers"),
        "c-chrome": await emojify(chrome, "Avaiable on Chrome"),
        "c-firefox": await emojify(firefox, "Avaiable on Firefox"),
        "c-tvbox": await emojify(tvbox, "Avaiable on most smart TV box platforms"),
        "c-roku": await emojify(roku, "Avaiable on Roku", true),
        "c-tvos": await emojify(tvos, "Avaiable on Apple TV", true),
        "c-console": await emojify(console, "Avaiable on a console"),
        "c-vr": await emojify(vr, "Avaiable on VR consoles"),
        "c-selfhost": await emojify(selfhost, "The service is selfhostable"),
        "c-proprietary": await emojify(proprietary, "Is a proprietary application"),
        "c-ads": await emojify(ads, "Contains ads"),
        "c-freemium": await emojify(freemium, "Contains paywalled features"),
        "c-paid": await emojify(paid, "Is a paid application"),
        "c-resource": await emojify(resource, "Resource to read"),
    }
}