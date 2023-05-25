const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
    item.style.display = "none";
    });
    tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
}
hideTabContent();
showTabContent();

let sliderindex = 0;
setInterval(() => {
    if(sliderindex >= 3){
        sliderindex = 0
    }
    else{
        sliderindex++
    }
    hideTabContent();
    showTabContent(sliderindex);
}, 1000);

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item,i) => {
        if (target === item) {
            console.log(i);
            sliderindex = i;
            hideTabContent();
            showTabContent(sliderindex);
        }
    });
    }
});

const slides = document.querySelectorAll(".offer__slide");
const sliderWrapper = document.querySelector(".offer__slider-wrapper")
const sliderPrev = document.querySelector(".offer__slider-prev")
const sliderNext = document.querySelector(".offer__slider-next")
const total = document.querySelector("#total")
const current = document.querySelector("#current")

let slideri = 0;

const showSlider = (index)=> {
    slides.forEach((slide) => {
    slide.style.display = "none";
    });

    slides[index].style.display = "block";
    current.textContent = SlideIndex(index + 1);
}

const SlideIndex = (index) =>{
    return index.toString().padStart(2, "0");
}

const SliderCounter=() => {
    total.textContent = SlideIndex(slides.length);
}

const prev = ()=> {
    slideri--;
    if (slideri < 0) {
    slideri = slides.length - 1;
    }
    showSlider(slideri);
}

const next = () => {
    slideri++;
    if (slideri >= slides.length) {
    slideri= 0;
    }
    showSlider(slideri);
}

sliderPrev.addEventListener("click", prev);
sliderNext.addEventListener("click", next);

SliderCounter();
showSlider(slideri);

const modal = document.querySelector(".modal")
const modalOpenBtn = document.querySelector(".btn_white")
const modalCloseBtn = document.querySelector(".modal__close")

const handleOpenModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

const handleCloseModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalOpenBtn.addEventListener("click", handleOpenModal)
modalCloseBtn.addEventListener("click", handleCloseModal)

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        handleCloseModal()
    }
})
















