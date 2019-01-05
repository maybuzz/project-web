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
