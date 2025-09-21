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
