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

function emoji(name: string) {return`<span class="custom-emoji">${name}</span>`}

export default {
    "c-mobile": emoji(phone),
    "c-android": emoji(android),
    "c-ios": emoji(ios),
    "c-pc": emoji(computer),
    "c-windows": emoji(windows),
    "c-macos": emoji(apple),
    "c-linux": emoji(linux),
    "c-cli": emoji(terminal),
    "c-web": emoji(web),
    "c-chrome": emoji(chrome),
    "c-firefox": emoji(firefox),
    "c-appletv": emoji(appletv),
    "c-console": emoji(console),
    "c-ads": emoji(ads),
    "c-proprietary": emoji(proprietary),
    "c-paid": emoji(paid),
    "c-freemium": emoji(freemium),
}