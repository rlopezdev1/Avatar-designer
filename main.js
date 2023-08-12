
const borderRadius =  document.querySelector("#border-radius")
const avatarImage = document.querySelector("#avatar-img")
const borderColor = document.querySelector("#border-color")
const imageButtons = document.querySelectorAll(".image-buttons")
const avatarFile = document.querySelector("#avatar")
const imageSize = document.querySelector("#image-size")


// local storage border value and color
avatarImage.style.borderRadius = localStorage.borderRadius
avatarImage.style.borderColor = localStorage.borderColor
avatarImage.style.width =  localStorage.size + "px"
avatarImage.style.height = localStorage.size + "px"

// Set the border radius slider to match default value of 150px
borderRadius.value = localStorage.borderRadiusInt ?? 150
borderColor.value = localStorage.borderColor
borderRadius.addEventListener("input", e => {
  localStorage.setItem("borderRadius", e.currentTarget.value + "px" )
  localStorage.setItem("borderRadiusInt",e.currentTarget.value )
   avatarImage.style.borderRadius = e.currentTarget.value + "%";
 
})

imageSize.addEventListener("change", e => {
  
  const size = e.currentTarget.value
  localStorage.setItem("size", size)
  // avatarImage.setAttribute("width", size + "px")
  avatarImage.style.width = size + "px"
  avatarImage.style.height = size + "px"
  //avatarImage.setAttribute("height", size + "px")
})

borderColor.addEventListener("input", e => {
  console.log(e.currentTarget.value)
  localStorage.borderColor = e.currentTarget.value
  avatarImage.style.borderColor = e.currentTarget.value
})

//.im

imageButtons.forEach(button => {

  button.addEventListener("click", e => {
    imageButtons.forEach(otherButton => {
      if(otherButton !== button) {
        otherButton.disabled = false;
      }
      
    })
      button.disabled = true;
      avatarImage.setAttribute("src", button.dataset.image);
  })
  
})

avatarFile.addEventListener("input", e => {
    const file = e.currentTarget.files[0]
    
    avatarImage.file = file
    

    const reader = new FileReader();
    reader.onload = e => {
      console.log("What is result: ", e.target)
      avatarImage.src = e.target.result
    };

    reader.readAsDataURL(file)


})


