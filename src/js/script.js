import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
})


const switchLangBtn = document.querySelector(".header__block-lang").querySelector("button"),
      langContent = document.querySelector(".header__block-lang-content");

      console.log(switchLangBtn)

switchLangBtn.addEventListener("click", () => {
    langContent.classList.add("show");
});

document.body.addEventListener("click", (e) => {
    if(e.target != switchLangBtn){
        langContent.classList.remove("show");
    }
});

const taskbarImagesPath = ["/src/img/taskbar/taskbarDark.png","/src/img/taskbar/taskbarLight1.png","/src/img/taskbar/taskbarLight2.png"];
const taskbarImage = document.querySelector(".taskbar__img");
let counter = 0;
console.log(taskbarImage);

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
