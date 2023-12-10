import android from "/icons/android.svg?raw"
import ios from "/icons/ios.svg?raw"
import apple from "/icons/apple.svg?raw"
import windows from "/icons/windows.svg?raw"
import linux from "/icons/linux.svg?raw"
import computer from "/icons/computer.svg?raw"
import phone from "/icons/phone.svg?raw"
import web from "/icons/web.svg?raw"
import freemium from "/icons/freemiun.svg?raw"
import paid from "/icons/paid.svg?raw"
import ads from "/icons/ads.svg?raw"

function emoji(name: string) {return`<span class="custom-emoji">${name}</span>`}

export default {
    "c-android": emoji(android),
    "c-ios": emoji(ios),
    "c-windows": emoji(windows),
    "c-macos": emoji(apple),
    "c-linux": emoji(linux),
    "c-pc": emoji(computer),
    "c-mobile": emoji(phone),
    "c-web": emoji(web),
    "c-ads": emoji(ads),
    "c-paid": emoji(paid),
    "c-freemium": emoji(freemium),
}