import markdownit, { PluginSimple } from 'markdown-it'
import doc from '/assets/index.md?raw'
import mdAnchor from "markdown-it-anchor"
import * as mdEmojis from "markdown-it-emoji"
// @ts-ignore sadly theres no types for this one
import mdSmall from "markdown-it-small"
import customIcons from "./custom-icons"

const media = window.matchMedia("(orientation: portrait)")

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
    .use((mdEmojis as unknown as {full: PluginSimple}).full, {defs: customIcons})
    .use(mdSmall)

// add open in new tab functionality
const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, _env, self) {
    return self.renderToken(tokens, idx, options);
};  
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    if(!token.attrGet("href")?.startsWith("#")) token.attrSet('target', '_blank');
    return defaultRender(tokens, idx, options, env, self);
};

document.getElementById('markdown')!.innerHTML += md.render(doc)


// anchoring
if(!(window.location.hash === "" || window.location.hash === "#")) location.href = window.location.hash

document.querySelector(".greetings-scroll")!.addEventListener("click", () => {
    if(! firstAnchorElement) return
    console.log(firstAnchorElement)
    setTimeout(() => location.href = `#${firstAnchorElement}`, 1)
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

