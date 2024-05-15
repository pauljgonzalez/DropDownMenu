const dropDownButton = document.querySelector("#dropDownShowCLick")
const dropDownMenu = document.querySelector("#dropDownMenu")
const dropDownMenuButtons = document.querySelectorAll(".selectOption")

dropDownMenuButtons.forEach((button) =>{
    button.addEventListener("click" , () =>{
        console.log(button.id)
    })
})



dropDownButton.addEventListener("click", () => {
  
    console.log(dropDownMenu.style.opacity)

    if(dropDownMenu.style.opacity == 0){
        dropDownMenu.style.opacity = 100
    }else{
        dropDownMenu.style.opacity = 0
    }
  });