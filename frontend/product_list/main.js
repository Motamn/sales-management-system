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

  const filterButton = document.getElementById("filter-button");
  const filterModal = document.getElementById("filter-modal");
  const filterOverlay =document.getElementById("filter-overlay");
  const closeMoldalbtn =document.getElementById("close-modal-button");
  const cancelModalbtn =document.getElementById("cancel-modal-button");
  const filterMoladbtn= document.getElementById("filter-modal-button");

  filterButton.addEventListener("click",()=>{
    filterModal.classList.remove("hidden");
    filterOverlay.classList.remove("hidden");
  })

  closeMoldalbtn.addEventListener("click",()=>{
    filterModal.classList.add("hidden");
    filterOverlay.classList.add("hidden");
  });

  cancelModalbtn.addEventListener("click",()=>{
    filterModal.classList.add("hidden");
    filterOverlay.classList.add("hidden");
  });

  //filtering
  const tableBody =document.getElementById("product-table-body");
  const filterName =document.getElementById("filter_name");
  const filterCategory =document.getElementById("filter_category");
  const filterCode =document.getElementById("filter_code");
  const filterPrice =document.getElementById("filter_price");
  const filterAvailability =document.getElementById("filter_availability");

  

  function filterProducts(){
    const nameValue = filterName.value.toLowerCase();
    const categoryValue= filterCategory.value;
    const codeValue = filterCode.value.toLowerCase();
    const priceValue = parseFloat(filterPrice.value);
    const availValue = filterAvailability.value; 
    const rows = tableBody.querySelectorAll("tr");


    rows.forEach(row => {
      const nameRow=row.cells[1].textContent.toLowerCase();
      const codeRow=row.cells[2].textContent.toLowerCase();
      const categoryRow=row.cells[3].textContent.toLowerCase();
      const priceRow=parseFloat(row.cells[4].textContent);
      const quantityRow=parseInt(row.cells[5].textContent);

      let isvisible=true;

      if(nameValue&&!nameRow.includes(nameValue))
        isvisible=false;

      if(categoryValue&&categoryRow!==categoryValue)
        isvisible=false;

      if(codeValue&&!codeRow.includes(codeValue))
        isvisible=false;

      if(!isNaN(priceValue)&&priceRow>priceValue)
        isvisible=false;

      if(availValue==="In stock"&&quantityRow<=0)
        isvisible=false;

      if(isvisible){
        row.style.display="";
      }
      else{
        row.style.display="none";
      }

    });

    


}

filterMoladbtn.addEventListener("click",filterProducts);

//buttons
if (tableBody) {
    tableBody.addEventListener("click", (event) => {
        const deleteButton = event.target.closest(".delete");
        if (deleteButton) {
            const rowToDelete = deleteButton.closest("tr");
            if (rowToDelete) {
                rowToDelete.remove();
            }
        }
        const editButton=event.target.closest(".edit");
        if(editButton){
          const rowToEdit=editButton.closest("tr");
          if(rowToEdit){
            event.preventDefault();
            window.location.href = "index.html";
          }
        }
    });
}

  



});



