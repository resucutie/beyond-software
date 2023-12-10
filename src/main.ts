import markdownit, { PluginSimple } from 'markdown-it'
import doc from '/assets/index.md?raw'
import mdAnchor from "markdown-it-anchor"
import mdCustomBlock from "markdown-it-custom-block"
import * as mdEmojis from "markdown-it-emoji"
import customIcons from "./custom-icons"
import blobfoxbox from "/blobfoxbox.svg"



const media = window.matchMedia("(orientation: portrait)")

const greetingsHtml = `
<div id="greetings">
    <span class="greetings-name">Beyond Software</span>
    <img src="${blobfoxbox}" class="greetings-icon" alt="blobfoxbox" />
    <span class="greetings-description">
        A collective list of reliable and trustworthy software and resources for a better user expierence.<br>
        No influence by sponsors, advertisements or finnancial gain.
    </span>

    <div class="greetings-scroll">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        <span>Scroll down</span>
    </div>
</div>
`

function closeDrawerIfMobile () {if(media.matches) hideDrawer()}

// md render
let firstAnchorElement: string | undefined = undefined
const md = markdownit()
    .use(mdAnchor, {
        callback: (token, info) => {
            if(!(token.tag === "h1" || token.tag === "h2")) return
            
            const node = document.createElement("a");
            node.setAttribute("href", `#${info.slug}`)
            node.classList.add("toc-content", token.tag)
            node.appendChild(document.createTextNode(info.title));
            node.onclick = closeDrawerIfMobile
            document.getElementById("toc")?.appendChild(node)

            if(!firstAnchorElement) firstAnchorElement = info.slug
        }
    })
    .use(mdCustomBlock, {
        greetings: () => greetingsHtml
    })
    .use((mdEmojis as unknown as {full: PluginSimple}).full, {defs: customIcons})

document.getElementById('markdown')!.innerHTML = md.render(doc)


// anchoring
if(!(window.location.hash === "" || window.location.hash === "#")) location.href = window.location.hash

document.querySelector(".greetings-scroll")!.addEventListener("click", () => {
    if(! firstAnchorElement) return
    document.getElementById(firstAnchorElement)!.scrollIntoView({behavior: "smooth"})
})


// open and close
const sidebar = document.getElementById("sidebar")!

function showDrawer() {
    sidebar.classList.remove("hidden")
}
function hideDrawer() {
    sidebar.classList.add("hidden")
}


function updateMobile(portrait: boolean) {
    if (portrait) hideDrawer()
    else showDrawer()
}

//update right away while also removing the animation on startup
sidebar.style.transition = "unset"
updateMobile(media.matches)
setTimeout(() => sidebar.style.removeProperty("transition"), 1)

media.addEventListener("change", ({matches: portrait}) => updateMobile(portrait)) //listen to updates

document.querySelector(".sidebar-name")!.addEventListener("click", () => {
    location.href = "#";
    location.href = "#greetings";
    closeDrawerIfMobile()
})

//manual updates
document.getElementById("drawer")!.onclick = () => {
    if (sidebar.classList.contains("hidden")) showDrawer()
    else hideDrawer()
}

