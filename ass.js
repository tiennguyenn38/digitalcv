"use strict";
const information = document.querySelector(".info-content");
const formButton = document.querySelector(".check");
const textVerify = document.querySelector(".form-text");
const formGroup = document.querySelector(".form-group");
const regex = /^\w+@[a-zA-Z]{3,}\.com$/i;
const checkMail = function () {
  const emailForm = document.querySelector(".form-control").value;
  if (emailForm == "" || emailForm == null) {
    textVerify.textContent = "Không được để trống";
  } else if (!regex.test(emailForm)) {
    textVerify.textContent = "Email nhập chưa hợp lệ";
  } else {
    information.classList.remove("hidden");
    formButton.classList.add("hidden");
    textVerify.classList.add("hidden");
    formGroup.classList.add("hidden");
  }
};
formButton.addEventListener("click", checkMail);

// view more and view less
const more1 = document.querySelector(".more1");
const more2 = document.querySelector(".more2");
const more3 = document.querySelector(".more3");
const more4 = document.querySelector(".more4");
const more5 = document.querySelector(".more5");
const more6 = document.querySelector(".more6");

const less1 = document.querySelector(".less1");
const less2 = document.querySelector(".less2");
const less3 = document.querySelector(".less3");
const less4 = document.querySelector(".less4");
const less5 = document.querySelector(".less5");
const less6 = document.querySelector(".less6");

const experiment = document.querySelector(".exp-company");
const activity = document.querySelector(".activity-content");
const skill = document.querySelector(".skill-content");
const language = document.querySelector(".language-content");
const hobby = document.querySelector(".hobby-content");
const education = document.querySelector(".education-content");
//hiện thông tin
less1.classList.add("hidden");
less1.classList.remove("view-less");

less2.classList.add("hidden");
less2.classList.remove("view-less");

less3.classList.add("hidden");
less3.classList.remove("view-less");

less4.classList.add("hidden");
less4.classList.remove("view-less");

less5.classList.add("hidden");
less5.classList.remove("view-less");

less6.classList.add("hidden");
less6.classList.remove("view-less");

//kinh nghiem
const viewMore1 = function () {
  experiment.classList.remove("hidden");
  less1.classList.add("view-less");
  less1.classList.remove("hidden");
  more1.classList.add("hidden");
};
more1.addEventListener("click", viewMore1);

//hoat dong
const viewMore2 = function () {
  activity.classList.remove("hidden");
  less2.classList.add("view-less");
  less2.classList.remove("hidden");
  more2.classList.add("hidden");
};
more2.addEventListener("click", viewMore2);

//hoc van

const viewMore3 = function () {
  education.classList.remove("hidden");
  less3.classList.add("view-less");
  less3.classList.remove("hidden");
  more3.classList.add("hidden");
};
more3.addEventListener("click", viewMore3);

//ky nang

const viewMore4 = function () {
  skill.classList.remove("hidden");
  less4.classList.add("view-less");
  less4.classList.remove("hidden");
  more4.classList.add("hidden");
};
more4.addEventListener("click", viewMore4);

//ngon ngu

const viewMore5 = function () {
  language.classList.remove("hidden");
  less5.classList.add("view-less");
  less5.classList.remove("hidden");
  more5.classList.add("hidden");
};
more5.addEventListener("click", viewMore5);

//so thich
const viewMore6 = function () {
  hobby.classList.remove("hidden");
  less6.classList.add("view-less");
  less6.classList.remove("hidden");
  more6.classList.add("hidden");
};
more6.addEventListener("click", viewMore6);

//ẩn thông tin

const viewLess1 = function () {
  experiment.classList.add("hidden");
  less1.classList.add("hidden");
  more1.classList.remove("hidden");
};
less1.addEventListener("click", viewLess1);

const viewLess2 = function () {
  activity.classList.add("hidden");
  less2.classList.add("hidden");
  more2.classList.remove("hidden");
};
less2.addEventListener("click", viewLess2);

const viewLess3 = function () {
  education.classList.add("hidden");
  less3.classList.add("hidden");
  more3.classList.remove("hidden");
};
less3.addEventListener("click", viewLess3);

const viewLess4 = function () {
  skill.classList.add("hidden");
  less4.classList.add("hidden");
  more4.classList.remove("hidden");
};
less4.addEventListener("click", viewLess4);

const viewLess5 = function () {
  language.classList.add("hidden");
  less5.classList.add("hidden");
  more5.classList.remove("hidden");
};
less5.addEventListener("click", viewLess5);

const viewLess6 = function () {
  hobby.classList.add("hidden");
  less6.classList.add("hidden");
  more6.classList.remove("hidden");
};
less6.addEventListener("click", viewLess6);
