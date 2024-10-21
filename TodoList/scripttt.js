const addBtn = document.querySelector(".addBtn");
const list = document.getElementById("myUL");
const input = document.getElementById("myInput");

const li = document.getElementsByTagName("li");

let bool = false;
addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Enter Your Title..");
  } else {
    const li = document.createElement("li");
    li.innerHTML = `${input.value} <div class="close">\u00D7</div>`
    list.appendChild(li);
    input.value = "";
    li.querySelector(".close").addEventListener('click',()=>{
        li.remove();
    })
    li.addEventListener('click',()=>{
        bool = !bool;
        if(bool == true){
            li.className = "checked";
        }
        else{
            li.className = "";
        }
    })
  }

});




