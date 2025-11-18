document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar-container");
  const btn_toggle = document.getElementById("toggle");
  const editPage = document.getElementById("edit-page");

  btn_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    if (sidebar.classList.contains("-translate-x-full")) {
      editPage.classList.remove("ml-52");
      btn_toggle.classList.remove("fa-list"); 
      btn_toggle.classList.add("fa-xmark");
    } else {
      editPage.classList.add("ml-52");
      btn_toggle.classList.add("fa-list");
      btn_toggle.classList.remove("fa-xmark");  
    }
  });
  
});

const quantityinput = document.getElementById("quantity");
quantityinput.addEventListener("input",()=>{
    let value=quantityinput.value;
    if(value<0)
        quantityinput.value=0;
});














