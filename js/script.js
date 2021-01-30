const openMenu = document.getElementById("openMenu")
const closeMenu = document.getElementById("closeMenu")
const itemSv = document.getElementById("service")
const itemQm = document.getElementById("WhoWeAre")
const itemCt = document.getElementById("contact")
const form = document.getElementById("form")

  
 openMenu.addEventListener("click", () =>{
  $("#Modalmenu").modal("show")
});
closeMenu.addEventListener("click", () =>{
  $("#Modalmenu").modal("hide")
});

itemSv.addEventListener("click",  () =>{
  $("#Modalmenu").modal("hide")
});

itemQm.addEventListener("click",  () =>{
  $("#Modalmenu").modal("hide")
});

itemCt.addEventListener("click",  () =>{
  $("#Modalmenu").modal("hide")
});

form.addEventListener("submit" ,  (event) =>{
event.preventDefault()

})