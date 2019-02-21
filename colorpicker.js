"use strict";

document.addEventListener("DOMContentLoaded", init);
let img;
let ctx = document.getElementById(`imageCanvas`).getContext(`2d`);
let colorinfo;
let x;
let y;
let myImageData;
let color = document.getElementById("color");

function init() {
  //load billede
  img = new Image(); // Create new img element
  img.addEventListener("load", imageLoaded);
  img.src = "cat.jpg"; // Set source path
}

function imageLoaded() {
  console.log("imageLoaded");
  ctx.drawImage(img, 0, 0);

  dataGetter();
  mouseMoved();
}

function mouseMoved() {
  colorinfo = document.querySelector("#imageCanvas");
  colorinfo.addEventListener("mousemove", logKey);
}

function logKey(e) {
  console.log(e);
  x = e.offsetX;
  y = e.offsetY;

  console.log(x, y);

  ctx.putImageData(myImageData, 0, 0);
  cursorFirkant();
  getColorAtPixel(x, y);
}

function getColorAtPixel(x, y) {}

function cursorFirkant() {
  let canvas = document.getElementById("imageCanvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.strokeStyle = "green";
    ctx.strokeRect(x - 5, y - 5, 10, 10);

    ctx.moveTo = (x, y);
  }
}

function dataGetter() {
  console.log(myImageData);
  myImageData = ctx.getImageData(0, 0, 500, 600);
}

function showColorInfo(rgb) {
  document.querySelector("#r").textContent = rgb.r;
  document.querySelector("#g").textContent = rgb.g;
  document.querySelector("#b").textContent = rgb.b;

  const hex =
    "#" +
    rgb.r.toString(16).padStart(2, "0") +
    rgb.g.toString(16).padStart(2, "0") +
    rgb.b.toString(16).padStart(2, "0");

  document.querySelector("#hex").textContent = hex;

  document.querySelector("#colorbox").style.backgroundColor = hex;
}
