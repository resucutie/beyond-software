const fs = require("fs")
const process = require("process")
const path = require("path")
const markdownIt = require("markdown-it")
const mdAnchor = require("markdown-it-anchor")
const mdEmojis = require("markdown-it-emoji")
const mdSmall = require("markdown-it-small")

const args = process.argv.slice(2)

const DIST_FOLDER = path.join(process.cwd(), "dist")
const LIST_FOLDER = path.resolve(args[0] || "./assets/index.md")
const HTML_TEMPLATE = path.join(process.cwd(), "./src/index.html")
const HTML_REPLACE_TAGS = {
    MD_REPLACE: "<!-- PREPROCESSOR-MD-DISPLAY-REPLACE -->",
}

const main = async () => {
    console.log({
        DIST_FOLDER,
        LIST_FOLDER
    })

    await ensureDistFolder()

    const mdContents = await fs.promises.readFile(LIST_FOLDER, { encoding: 'utf8' })
    console.log(`successfully read ${path.relative(process.cwd(), LIST_FOLDER)} (${utils.blobSize(mdContents)} bytes). processing it`)
    
    const processedHtml = mdProcessor(mdContents)
    console.log(`generated an HTML with ${utils.blobSize(processedHtml)} bytes. injecting into ${path.relative(process.cwd(), HTML_TEMPLATE)}`)
    
    const templateHtml = await fs.promises.readFile(HTML_TEMPLATE, { encoding: 'utf8' })
    const htmlOutput = templateHtml.replace(HTML_REPLACE_TAGS.MD_REPLACE, processedHtml)
    const outputHtmlFile = path.join(DIST_FOLDER, "./index.html")
    await fs.promises.writeFile(outputHtmlFile, htmlOutput)
    console.log(`wrote output HTML file to ${outputHtmlFile}`)
}

const ensureDistFolder = async () => {
    const relativePath = path.relative(process.cwd(), DIST_FOLDER)
    try {
        await fs.promises.access(DIST_FOLDER);
        console.log(`output "${relativePath}" folder exists`);
    } catch (e) {
        console.log(`${relativePath} folder doesn't exist, creating`)
        await fs.promises.mkdir(DIST_FOLDER, { recursive: true})
    }
}

const mdProcessor = (content) => {
    let firstAnchorElement
    const md = markdownIt()
        .use(mdAnchor, {
            callback: (token, info) => {
                if(!(token.tag === "h1" || token.tag === "h2")) return

                // const node = document.createElement("a");
                // node.setAttribute("href", `#${info.slug}`)
                // node.classList.add("toc-content", token.tag)
                // node.appendChild(document.createTextNode(info.title));
                // node.onclick = closeDrawerIfMobile
                // document.getElementById("toc")?.appendChild(node)

                if(!firstAnchorElement) firstAnchorElement = info.slug
            }
        })
        .use(mdEmojis.full, /*{defs: customIcons}*/)
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

    return md.render(content)
}

const utils = {
    blobSize: str => new Blob([str]).size
}

main()