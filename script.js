//slecting popup box and popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


// select container ,add book and book-title input author-input,book-description-input

var container = document.querySelector(".main-container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-Author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){

   event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container  max-w-[340px]")
    div.innerHTML=`   <h2 class="text-[20px] font-semibold">${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p class="para text-[14px] py-3 max-w-full">${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//delect button select


function deletebook(event)
{
    event.target.parentElement.remove()
}