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

function emoji(name: string, alt?: string) {return`<span class="custom-emoji" ${alt ? `title="${alt}"` : ""}>${name}</span>`}

export default {
    "c-mobile": emoji(phone, "Avaiable on all mobile platforms"),
    "c-android": emoji(android, "Avaiable on Android"),
    "c-ios": emoji(ios, "Avaiable on iPhone"),
    "c-pc": emoji(computer, "Avaiable on all desktop platforms"),
    "c-windows": emoji(windows, "Avaiable on Windows"),
    "c-macos": emoji(apple, "Avaiable on macOS"),
    "c-linux": emoji(linux, "Avaiable on Linux"),
    "c-cli": emoji(terminal, "Is a command line only application"),
    "c-web": emoji(web, "Avaiable on all browsers"),
    "c-chrome": emoji(chrome, "Avaiable on Chrome"),
    "c-firefox": emoji(firefox, "Avaiable on Firefox"),
    "c-appletv": emoji(appletv, "Avaiable on Apple TV"),
    "c-console": emoji(console, "Avaiable on a console"),
    "c-proprietary": emoji(proprietary, "Is a proprietary application"),
    "c-ads": emoji(ads, "Contains ads"),
    "c-freemium": emoji(freemium, "Contains paywalled features"),
    "c-paid": emoji(paid, "Is a paid application"),
}