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
    const codeValue = parseInt(filterCode.value);
    const priceValue = parseFloat(filterPrice.value);
    const availValue = filterAvailability.value; 
    const rows = tableBody.getElementsByTagName("tr");

    rows.forEach(row => {
      const nameRow=row.cells[1].textcontent.toLowerCase();
      const codeRow=parseInt(row.cells[2].textcontent);
      const categoryRow=row.cells[3].textcontent.toLowerCase();
      const priceRow=parseFloat(row.cells[4].textcontent);
      const quantityRow=parseInt(row.cells[5].textcontent);

      let isVisible = true;

        if (nameValue && !nameRow.includes(nameValue)) {
            isVisible = false;
        }
        
        // تحقق من فلتر الكود: هل الكود المدخل موجود في كود الصف؟
        if (codeValue && !codeRow.includes(codeValue)) {
            isVisible = false;
        }

        // تحقق من فلتر الفئة (Category): هل الفئة المختارة تطابق فئة الصف؟
        // (نتأكد أن categoryValue ليس فارغاً قبل المقارنة)
        if (categoryValue && categoryRow !== categoryValue) {
            isVisible = false;
        }

        // تحقق من فلتر السعر: هل سعر الصف أكبر من السعر المدخل؟
        // (نتأكد أن priceValue هو رقم صالح "isNaN = Is Not a Number")
        if (!isNaN(priceValue) && priceRow > priceValue) {
            isVisible = false;
        }

        // تحقق من فلتر التوفر (Availability)
        if (availValue === "in stock" && quantityRow <= 0) {
            isVisible = false;
        }

        if (isVisible) {
            row.style.display = ""; // (إظهار)
        } else {
            row.style.display = "none"; // (إخفاء)
        }
    });
    
}

});
