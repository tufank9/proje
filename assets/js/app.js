// DOM TAGS
const desigin = document.querySelector('.desigin')
const card = document.querySelector('.content-card')
const container = document.querySelector('.container')
const photo = document.querySelector('.photo')

// initialize
function init(){
    getTitleData()
    getCardData()
    getLogoData()
    getLinkData()
}

// json datas
const TİTLE_URL = "assets/json/title.json"; // title json data
const CONTENT_URL = "assets/json/card.json"; // card json data
const LİNK_URL = "assets/json/menu.json"; // menu json data
const LOGO_URL = "assets/json/logo.json"; // logo json data
// json datas end

// logo data
async function logoData(){
    const data = await fetch(LOGO_URL)
    const logo = await data.json();
    return logo;
}

async function getLogoData(){
    const logo = await logoData();
    container.innerHTML+=
    `
        <div class="photo">
            <img src="${logo.logo}" alt="">
        </div> 
    `
}
// logo data end

// link data
async function linkData(){
    const data = await fetch(LİNK_URL)
    const link = await data.json()
    // console.log(link); 
    return link;
}

async function getLinkData(){
    const links = await linkData();
    console.log(links);
    for(const link of links){
        container.innerHTML += 
        ` 
        <div class="titles">
            <ul>
                <a href="">${link.menu}</a>
            </ul> 
        </div>
        `
    }
}
// link data end

// title data
async function tittleData(){
    const data = await fetch(TİTLE_URL);
    const title = await data.json();
    // console.log(title.main.title);
    // console.log(title.main.description);
    return title;
}
async function getTitleData(){
    const title = await tittleData();
    desigin.innerHTML+=
    `
    <h1>${title.main.title}</h1>
    <p>${title.main.description}</p> 
    `
}
// title data end

// card data
async function cardData(){
    const data = await fetch(CONTENT_URL);
    const content = await data.json();
    // console.log(content);
    return content;
}

async function getCardData(){
    const keys = await cardData();
    console.log(keys[0]);
    for(const key of keys){
        // console.log(key);
        card.innerHTML+=
        `
        <div class="card-conten">
            <img src=${key.photo} alt="">
                <div class="text-content">
                    <h1>${key.title}</h1>
                    <p>${key.description}</p>
                </div>
        </div>
        `
    }
}
// card data end


init()
