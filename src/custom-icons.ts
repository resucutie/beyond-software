import phone from "/icons/phone.svg?raw"
import android from "/icons/android.svg?raw"
import ios from "/icons/ios.svg?raw"
import computer from "/icons/computer.svg?raw"
import windows from "/icons/windows.svg?raw"
import apple from "/icons/apple.svg?raw"
import linux from "/icons/linux.svg?raw"
import terminal from "/icons/terminal.svg?raw"
import web from "/icons/web.svg?raw"
import chrome from "/icons/chrome.svg?raw"
import firefox from "/icons/firefox.svg?raw"
import appletv from "/icons/appletv.svg?raw"
import console from "/icons/console.svg?raw"
import proprietary from "/icons/proprietary.svg?raw"
import freemium from "/icons/freemiun.svg?raw"
import paid from "/icons/paid.svg?raw"
import ads from "/icons/ads.svg?raw"
import resource from "/icons/resource.svg?raw"

function emojify(name: string, alt?: string) {return`<span class="custom-emoji" ${alt ? `title="${alt}"` : ""}>${name}</span>`}

export default {
    "c-mobile": emojify(phone, "Avaiable on all mobile platforms"),
    "c-android": emojify(android, "Avaiable on Android"),
    "c-ios": emojify(ios, "Avaiable on iPhone"),
    "c-pc": emojify(computer, "Avaiable on all desktop platforms"),
    "c-windows": emojify(windows, "Avaiable on Windows"),
    "c-macos": emojify(apple, "Avaiable on macOS"),
    "c-linux": emojify(linux, "Avaiable on Linux"),
    "c-cli": emojify(terminal, "Is a command line only application"),
    "c-web": emojify(web, "Avaiable on all browsers"),
    "c-chrome": emojify(chrome, "Avaiable on Chrome"),
    "c-firefox": emojify(firefox, "Avaiable on Firefox"),
    "c-appletv": emojify(appletv, "Avaiable on Apple TV"),
    "c-console": emojify(console, "Avaiable on a console"),
    "c-proprietary": emojify(proprietary, "Is a proprietary application"),
    "c-ads": emojify(ads, "Contains ads"),
    "c-freemium": emojify(freemium, "Contains paywalled features"),
    "c-paid": emojify(paid, "Is a paid application"),
    "c-resource": emojify(resource, "Resource to read"),
}