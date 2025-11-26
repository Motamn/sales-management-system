document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar-container");
  const btn_toggle = document.getElementById("toggle");
  const list_page = document.getElementById("list-page");

  btn_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    if (sidebar.classList.contains("-translate-x-full")) {
      list_page.classList.remove("ml-52");
      btn_toggle.classList.remove("fa-list");
      btn_toggle.classList.add("fa-xmark");
    } else {
      list_page.classList.add("ml-52");
      btn_toggle.classList.add("fa-list");
      btn_toggle.classList.remove("fa-xmark");
    }
  });

  const filterButton = document.getElementById("filter-button");
  const filterModal = document.getElementById("filter-modal");
  const filterOverlay = document.getElementById("filter-overlay");
  const closeModalbtn = document.getElementById("close-modal-button");
  const cancelModalbtn = document.getElementById("cancel-modal-button");
  const filterModalbtn = document.getElementById("filter-modal-button");

  filterButton.addEventListener("click", () => {
    filterModal.classList.remove("hidden");
    filterOverlay.classList.remove("hidden");
  });

  closeModalbtn.addEventListener("click", () => {
    filterModal.classList.add("hidden");
    filterOverlay.classList.add("hidden");
  });

  cancelModalbtn.addEventListener("click", () => {
    filterModal.classList.add("hidden");
    filterOverlay.classList.add("hidden");
  });

  //filtering&&sorting
  const tableBody = document.getElementById("product-table-body");
  const filterName = document.getElementById("filter_name");
  const filterCategory = document.getElementById("filter_category");
  const filterCode = document.getElementById("filter_code");
  const filterPrice = document.getElementById("filter_price");
  const filterAvailability = document.getElementById("filter_availability");
  
  function filterProducts() {
    const nameValue = filterName.value.toLowerCase();
    const categoryValue = filterCategory.value.toLowerCase();
    const codeValue = filterCode.value.toLowerCase();
    const availValue = filterAvailability.value.toLowerCase();
    const rows = tableBody.querySelectorAll("tr");

    rows.forEach((row) => {
      const nameRow = row.cells[1].textContent.toLowerCase();
      const codeRow = row.cells[2].textContent.toLowerCase();
      const categoryRow = row.cells[3].textContent.toLowerCase();
      const quantityRow = parseInt(row.cells[6].textContent);
      console.log(quantityRow);

      let isvisible = true;

      if (nameValue && !nameRow.includes(nameValue)) 
        isvisible = false;

      if (categoryValue && categoryRow !== categoryValue) 
        isvisible = false;

      if (codeValue && !codeRow.includes(codeValue)) 
        isvisible = false;

      if (availValue == "in stock" && quantityRow == 0) 
        isvisible = false;

      if (availValue == "out of stock" && quantityRow > 0) 
        isvisible = false;

      if (isvisible) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });

    //sortedRows 
  
  let ArrayRows= Array.from(rows);
  const priceValue = filterPrice.value.toLowerCase();
  if(priceValue!==""){
  ArrayRows.sort((a,b)=>{
    const priceA= parseFloat(a.cells[4].getAttribute("data-price"))||0;
    const priceB= parseFloat(b.cells[4].getAttribute("data-price"))||0;
    if(priceValue=="from high to low"){
       return priceB-priceA;    
    }
    if(priceValue=="from low to high"){
       return priceA-priceB;
    }

  });

  }
  
  ArrayRows.forEach(row=>tableBody.appendChild(row));

  }

  filterModalbtn.addEventListener("click", filterProducts);



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
    });
  }

  const navItem = document.querySelectorAll(".nav-item");

  navItem.forEach((item) => {
    item.addEventListener("click", () => {
      navItem.forEach((n) => n.classList.remove("active"));

      item.classList.add("active");
    });
  });
  
    



});


