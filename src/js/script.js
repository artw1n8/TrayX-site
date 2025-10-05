import "/src/sass/style.scss";
import taskbarDark from '/src/img/taskbar/taskbarDark.png';
import taskbarLight1 from '/src/img/taskbar/taskbarLight1.png';
import taskbarLight2 from '/src/img/taskbar/taskbarLight2.png';

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
