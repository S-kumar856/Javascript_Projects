const input = document.getElementById("myInput");
const myul= document.getElementById("myUL");
const AddBtn = document.querySelector(".addBtn");
 
let toggle = false;
// const Li = document.getElementsByTagName("li");


AddBtn.addEventListener('click', () => {
    if(input.value ===""){
        alert("Input field cannot be empty!")
        return;
    }else{
        let li = document.createElement("li");
        li.innerHTML = `${input.value} <div class="close">\u00D7</div>`;
        myul.appendChild(li);
        input.value = ""
        li.querySelector(".close").addEventListener('click', () =>{
            li.remove();
        })
        li.addEventListener('click', ()=>{
            toggle = !toggle;
            if (toggle === true){

                li.className = 'checked';
            }else{
                li.className = '';
            }


        })

}
})



