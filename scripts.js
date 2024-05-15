const toggleDropDown = document.querySelectorAll(".dropDownShow")
const optionButtons = document.querySelectorAll(".selectOption")
toggleDropDown.forEach((button) =>{
    if(button.parentNode.childNodes[1].id == "dropDownShowCLick"){
        button.addEventListener("click", () =>{
                    let opacity = button.parentNode.parentNode.lastChild.previousElementSibling.style.opacity 
                    if(opacity  == "" || opacity == 0){
                        button.parentNode.parentNode.lastChild.previousElementSibling.style.opacity  = 100
                        // button.parentNode.parentNode.lastChild.previousElementSibling.style.cursor = "pointer"
                    } else{
                        button.parentNode.parentNode.lastChild.previousElementSibling.style.opacity  = 0
                        
                    }
            button.parentNode.parentNode.addEventListener("mouseleave", () =>{
                    button.parentNode.parentNode.lastChild.previousElementSibling.style.opacity  = 0 
        })
            })
        }  
        if(button.parentNode.childNodes[1].id == "dropDownShowHover"){
            button.addEventListener("mouseover", () =>{
                    let opacity = button.parentNode.parentNode.lastChild.previousElementSibling.style.opacity 
                    if(opacity  == "" || opacity == 0){
                        button.parentNode.parentNode.lastChild.previousElementSibling.style.opacity  = 100
                    } else{
                        button.parentNode.parentNode.lastChild.previousElementSibling.style.opacity  = 0 
                }
            })
            button.parentNode.parentNode.addEventListener("mouseleave", () =>{
                    button.parentNode.parentNode.lastChild.previousElementSibling.style.opacity  = 0 
        })
        }
})

optionButtons.forEach((button) =>{
    button.addEventListener("click",()=>{
        console.log(button.id)
    })
})