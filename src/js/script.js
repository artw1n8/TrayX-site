import "/src/sass/style.scss";
import taskbarDark from '/src/img/taskbar/taskbarDark.png';
import taskbarLight1 from '/src/img/taskbar/taskbarLight1.png';
import taskbarLight2 from '/src/img/taskbar/taskbarLight2.png';
import json from '/src/json/localization.json';

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu"),
    links = menu.querySelectorAll("li");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("header__menu_active");
    });
});


const switchLangBtn = document.querySelector(".header__block-lang").querySelector("button"),
      langContent = document.querySelector(".header__block-lang-content");

switchLangBtn.addEventListener("click", () => {
    langContent.classList.add("show");
});

document.body.addEventListener("click", (e) => {
    if(e.target != switchLangBtn){
        langContent.classList.remove("show");
    }
});


const taskbarImagesPath = [taskbarDark,taskbarLight1,taskbarLight2];
const taskbarImage = document.querySelector(".taskbar__img");
let counter = 0;

const changeTaskbarImage = () => {      
    taskbarImage.style.opacity = 0;
    setTimeout(() => {
        taskbarImage.src = taskbarImagesPath[counter];
        taskbarImage.style.opacity = 1;
    }, 1500)

    if(counter == taskbarImagesPath.length - 1){
        counter = 0;
    } else {
        counter++;
    }
}

setInterval(changeTaskbarImage, 6000);

// change lang
const changeLang = (lang) => {
    const title = document.querySelector(".home__title-h1");
    const desc = document.querySelector(".home__title-h2");
    const mainBtn = document.querySelectorAll(".btn-download")[1];
    const headerBtn = document.querySelectorAll(".btn-download")[0];
    const instructionBtn = document.querySelector(".btn-instruction");
    const startBtn = document.querySelector(".start__wrapper-btn");
    const titleFeatures = document.querySelector(".title-h2");
    const featuresTitles = document.querySelectorAll(".features__title-h3");
    const featuresDesc =  document.querySelectorAll(".features__info");
    const titleStart = document.querySelector(".start__title");
    const startInstr = document.querySelector(".start__wrapper-text");
    const footerSection = document.querySelectorAll(".footer__header")[0];
    const footerContact = document.querySelectorAll(".footer__header")[1];

    title.innerHTML = json[lang].title;
    desc.textContent = json[lang].description;
    mainBtn.innerHTML = json[lang]["button-main-download"];
    headerBtn.innerHTML = json[lang]["button-download"];
    instructionBtn.innerHTML = json[lang]["button-instruction"];
    startBtn.innerHTML = json[lang]["button-start"];
    titleFeatures.textContent = json[lang]["title-features"];
    titleStart.textContent = json[lang]["title-start"];
    startInstr.innerHTML = json[lang]["instructions"];
    footerSection.textContent = json[lang]["footer-sections"];
    footerContact.textContent = json[lang]["footer-contact"];

    featuresTitles.forEach((title, i) => {
        title.textContent = json[lang][`subtitle-features-${i+1}`];
    });

    featuresDesc.forEach((desc, i) => {
        desc.textContent = json[lang][`desc-features-${i+1}`];
    });
}

if(!localStorage.getItem('lang')){
    localStorage.setItem('lang', "eng");
    console.log('setLang');
} else {
    const lang = localStorage.getItem('lang');
    if(lang == "Ru"){
        changeLang(lang.toLowerCase());
        switchLangBtn.innerHTML = switchLangBtn.innerHTML.replace("En", "Ru");
    }
}

const langBtns = langContent.querySelectorAll("a");

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        changeLang(btn.text.toLowerCase());
        let convertStr = btn.text[0].toUpperCase() + btn.text[1];
        console.log(convertStr)
        localStorage.setItem('lang', convertStr);
        switchLangBtn.innerHTML = switchLangBtn.innerHTML.replace(/En|Ru/,convertStr);
    })
})

