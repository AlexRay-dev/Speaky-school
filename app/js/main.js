/* Burger */
const menuBtn = document.querySelector('.burger-container');
const menuMobile = document.querySelector('.header__menu');
let menuOpen = false;

menuBtn.addEventListener('click', function () {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuMobile.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuMobile.classList.remove('open');
        menuOpen = false;
    }
});





/* Form */
const formTabBtn = document.querySelectorAll(".form__tabs-btn");
const formTabItem = document.querySelectorAll(".form__tabs-item");

formTabBtn.forEach(onFormTabClick)

function onFormTabClick(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)

        if (! currentBtn.classList.contains("form__tabs-btn--active")) {
            formTabBtn.forEach(function (item) {
                item.classList.remove("form__tabs-btn--active")
            });

            formTabItem.forEach(function (item) {
                item.classList.remove("form__tabs-item--active")
            });

            currentBtn.classList.add("form__tabs-btn--active");
            currentTab.classList.add("form__tabs-item--active")
        };
    });
};


/* Price */
const priceTabBtn = document.querySelectorAll(".price__tabs-btn");
const priceTabItem = document.querySelectorAll(".price__items");

priceTabBtn.forEach(onPriceTabClick)

function onPriceTabClick(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)

        if (! currentBtn.classList.contains("price__tabs-btn--active")) {
            priceTabBtn.forEach(function (item) {
                item.classList.remove("price__tabs-btn--active")
            });

            priceTabItem.forEach(function (item) {
                item.classList.remove("price__items--active")
            });

            currentBtn.classList.add("price__tabs-btn--active");
            currentTab.classList.add("price__items--active")
        };
    });
};
/* Tabs-line */
const tabsLineBtn = document.querySelectorAll(".tabs-line__btn");
const tabsLineItem = document.querySelectorAll(".history__item");

tabsLineBtn.forEach(onTabBtnClick)

function onTabBtnClick(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)

        if (! currentBtn.classList.contains("tabs-line__btn--active")) {
            tabsLineBtn.forEach(function (item) {
                item.classList.remove("tabs-line__btn--active")
            });

            tabsLineItem.forEach(function (item) {
                item.classList.remove("history__item--active")
            });

            currentBtn.classList.add("tabs-line__btn--active");
            currentTab.classList.add("history__item--active")
        };
    });
};

document.querySelector(".tabs-line__btn").click();