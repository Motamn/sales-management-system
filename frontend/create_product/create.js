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

const quantityinput = document.getElementById("quantity");
quantityinput.addEventListener("input",()=>{
    let value=quantityinput.value;
    if(value<0)
        quantityinput.value=0;

});

//Dark mood && White mood
    const ToggleTheme=document.getElementById("toogle-theme");
    const htmlele=document.documentElement;
    if(localStorage.getItem("theme")==="dark"){
      htmlele.classList.add("dark");
      ToggleTheme.classList.add("fa-moon");
      ToggleTheme.classList.remove("fa-sun");
    }
    else{
      htmlele.classList.remove("dark");
      ToggleTheme.classList.remove("fa-moon");
      ToggleTheme.classList.add("fa-sun");
    }


    ToggleTheme.addEventListener("click",()=>{

      if(ToggleTheme.classList.contains("fa-sun")){
        ToggleTheme.classList.remove("fa-sun");
        ToggleTheme.classList.add("fa-moon");
        htmlele.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }

      else{
        ToggleTheme.classList.remove("fa-moon");
        ToggleTheme.classList.add("fa-sun");
        htmlele.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      
    });







    

});














