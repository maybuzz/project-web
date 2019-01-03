/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var moreOptions = document.querySelector(".more")
var lessOptions = document.querySelector(".less")
var options = document.querySelector("#options")

moreOptions.addEventListener('click', showOptions)

function showOptions(e) {
    e.preventDefault()
    moreOptions.className = "less"
    lessOptions.className = "more"

    if(lessOptions.className = "more"){
      options.className = "seeMe"
      moreOptions.className = "less"
    }
  }

lessOptions.addEventListener('click', hideOptions)

function hideOptions(e) {
  e.preventDefault()
  moreOptions.className = "more"
  lessOptions.className = "less"

  if(moreOptions.className = "more"){
    options.className = "seeMeNot"
    lessOptions.className = "less"
  }
}

var empty = document.querySelectorAll(".empty")
var full = document.querySelectorAll(".full")
var bubble = document.querySelector(".bubbleOff")

for (let i = 0; i < empty.length; i++) {
  empty[i].addEventListener('click', function(){
    fillHeart(i)
  })
}

function fillHeart(i) {
    empty[i].className = "full"
    full[i].className = "empty"

    if(empty[i].className = "full"){
      bubble.className = "bubbleOn"
    }
}

// function bubble() {
//   bubble.className = "bubbleOn"
// }

for (let i = 0; i < full.length; i++) {
  full[i].addEventListener('click', function(){
    emptyHeart(i)
  })
}

function emptyHeart(i) {
  empty[i].className = "empty"
  full[i].className = "full"
}
