document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar-container");
  const btn_toggle = document.getElementById("toggle");
  const productPage = document.getElementById("product-page");

  btn_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    if (sidebar.classList.contains("-translate-x-full")) {
      productPage.classList.remove("ml-52");
      btn_toggle.classList.remove("fa-list"); 
      btn_toggle.classList.add("fa-xmark");
    } else {
      productPage.classList.add("ml-52");
      btn_toggle.classList.add("fa-list");
      btn_toggle.classList.remove("fa-xmark");  
    }
  });
  const
});

const quantityinput = document.getElementById("quantity");
quantityinput.addEventListener("input",()=>{
    let value=quantityinput.value;
    if(value<0)
        quantityinput.value=0;
});














