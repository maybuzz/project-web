/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var moreOptions = document.querySelector("#more")
var lessOptions = document.querySelector("#less")
var options = document.querySelector("#options")

more.addEventListener('click', showOptions)

function showOptions(e) {
    e.preventDefault()
    console.log("doei")
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
  console.log("dag")
  moreOptions.className = "more"
  lessOptions.className = "less"

  if(moreOptions.className = "more"){
    options.className = "seeMeNot"
    lessOptions.className = "less"
  }
}
