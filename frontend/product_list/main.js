// document.addEventListener("DOMContentLoaded", () => {
//   const sidebar = document.getElementById("sidebar-container");
//   const btn_toggle = document.getElementById("toggle");
//   const productPage = document.getElementById("product-page");

//   btn_toggle.addEventListener("click", () => {
//     sidebar.classList.toggle("-translate-x-full");
//     if (sidebar.classList.contains("-translate-x-full")) {
//       productPage.classList.remove("ml-52");
//       btn_toggle.classList.remove("fa-list"); 
//       btn_toggle.classList.add("fa-xmark");
//     } else {
//       productPage.classList.add("ml-52");
//       btn_toggle.classList.add("fa-list");
//       btn_toggle.classList.remove("fa-xmark");  
//     }
//   });

//   const filterButton = document.getElementById("filter-button");
//   const filterModal = document.getElementById("filter-modal");
//   const filterOverlay =document.getElementById("filter-overlay");
//   const closeMoldalbtn =document.getElementById("close-modal-button");
//   const cancelModalbtn =document.getElementById("cancel-modal-button");
//   const filterMoladbtn= document.getElementById("filter-modal-button");

//   filterButton.addEventListener("click",()=>{
//     filterModal.classList.remove("hidden");
//     filterOverlay.classList.remove("hidden");
//   })

//   closeMoldalbtn.addEventListener("click",()=>{
//     filterModal.classList.add("hidden");
//     filterOverlay.classList.add("hidden");
//   });

//   cancelModalbtn.addEventListener("click",()=>{
//     filterModal.classList.add("hidden");
//     filterOverlay.classList.add("hidden");
//   });

//   //filtering
//   const tableBody =document.getElementById("product-table-body");
//   const filterName =document.getElementById("filter_name");
//   const filterCategory =document.getElementById("filter_category");
//   const filterCode =document.getElementById("filter_code");
//   const filterPrice =document.getElementById("filter_price");
//   const filterAvailability =document.getElementById("filter_availability");
//   const searchInput=document.getElementById("Search");

  

//   function filterProducts(){
//     const nameValue = filterName.value.toLowerCase();
//     const categoryValue= filterCategory.value.toLowerCase();
//     const codeValue = filterCode.value.toLowerCase();
//     const priceValue = parseFloat(filterPrice.value);
//     const availValue = filterAvailability.value; 
//     const rows = tableBody.querySelectorAll("tr");


//     rows.forEach(row => {
//       const nameRow=row.cells[1].textContent.toLowerCase();
//       const codeRow=row.cells[2].textContent.toLowerCase();
//       const categoryRow=row.cells[3].textContent.toLowerCase();
//       const priceRow=parseFloat(row.cells[4].textContent);
//       const quantityRow=parseInt(row.cells[5].textContent);

//       let isvisible=true;

//       if(nameValue&&!nameRow.includes(nameValue))
//         isvisible=false;

//       if (categoryValue && categoryRow !== categoryValue) {
//             isvisible = false;
//         }

//       if(codeValue&&!codeRow.includes(codeValue))
//         isvisible=false;

//       if(!isNaN(priceValue)&&priceRow>priceValue)
//         isvisible=false;

//       if(availValue==="In stock"&&quantityRow<=0)
//         isvisible=false;

//       if(isvisible){
//         row.style.display="";
//       }
//       else{
//         row.style.display="none";
//       }

//     });

    


// }

// filterMoladbtn.addEventListener("click",filterProducts);


    

// //buttons
// if (tableBody) {
//     tableBody.addEventListener("click", (event) => {
//         const deleteButton = event.target.closest(".delete");
//         if (deleteButton) {
//             const rowToDelete = deleteButton.closest("tr");
//             if (rowToDelete) {
//                 rowToDelete.remove();
//             }
//           }

//     });
// }

// const navItem= document.querySelectorAll(".nav-item");

// navItem.forEach((item)=>{
//   item.addEventListener("click",()=>{

//     navItem.forEach(n=>n.classList.remove("active"));
    
//     item.classList.add("active");
//   })

// });







// });

document.addEventListener("DOMContentLoaded", () => {
  
    // --- 1. كود القائمة الجانبية (Sidebar) ---
    const sidebar = document.getElementById("sidebar-container");
    const btn_toggle = document.getElementById("toggle");
    const Listpage = document.getElementById("List-page");
  
    if (btn_toggle && sidebar && Listpage) { 
      btn_toggle.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
        if (sidebar.classList.contains("-translate-x-full")) {
          Listpage.classList.remove("ml-52");
          btn_toggle.classList.remove("fa-xmark"); 
          btn_toggle.classList.add("fa-list");
        } else {
          Listpage.classList.add("ml-52");
          btn_toggle.classList.add("fa-xmark");    
          btn_toggle.classList.remove("fa-list"); 
        }
      });
    }
    
    // --- 2. كود حقل الكمية (Quantity) ---
    const quantityinput = document.getElementById("quantity");
    if (quantityinput) { 
      quantityinput.addEventListener("input",()=>{
          let value=quantityinput.value;
          if(value<0)
              quantityinput.value=0;
      });
    }
  
    // --- 3. كود "مودال" الفلتر (Modal) ---
    // غيرنا الاسم لـ open-filter-button ليطابق الـ HTML
    const openFilterBtn = document.getElementById("open-filter-button");
    const filterModal = document.getElementById("filter-modal");
    const filterOverlay = document.getElementById("filter-overlay");
    const closeMoldalbtn = document.getElementById("close-modal-button");
    const cancelModalbtn = document.getElementById("cancel-modal-button");
    const filterMoladbtn = document.getElementById("filter-modal-button"); // زر الفلتر الأخضر
  
    // دالة فتح المودال
    if (openFilterBtn && filterModal && filterOverlay) {
        openFilterBtn.addEventListener("click", () => {
            filterModal.classList.remove("hidden");
            filterOverlay.classList.remove("hidden");
        });
    }

    // دالة إغلاق المودال
    const closeModal = () => {
        filterModal.classList.add("hidden");
        filterOverlay.classList.add("hidden");
    };

    if (closeMoldalbtn) closeMoldalbtn.addEventListener("click", closeModal);
    if (filterOverlay) filterOverlay.addEventListener("click", closeModal);

    // زر Cancel (تصفير الحقول وإعادة الجدول)
    if (cancelModalbtn) {
        cancelModalbtn.addEventListener("click", () => {
            // تصفير الحقول
            document.getElementById("filter_name").value = "";
            document.getElementById("filter_code").value = "";
            document.getElementById("filter_price").value = "";
            document.getElementById("filter_category").value = "";
            document.getElementById("filter_availability").value = "";
            
            // تحديث الجدول (إلغاء الفلترة)
            filterProducts();
            
            // إغلاق
            closeModal();
        });
    }
  
    // --- 4. كود فلترة الجدول (المهم) ---
    const tableBody = document.getElementById("product-table-body");
    const filterName = document.getElementById("filter_name");
    const filterCategory = document.getElementById("filter_category");
    const filterCode = document.getElementById("filter_code");
    const filterPrice = document.getElementById("filter_price");
    const filterAvailability = document.getElementById("filter_availability");
  
    // الدالة الرئيسية للفلترة
    function filterProducts() {
      // قراءة القيم (مع تنظيف النصوص)
      const nameValue = filterName.value.toLowerCase().trim();
      const categoryValue = filterCategory.value.toLowerCase().trim();
      const codeValue = filterCode.value.toLowerCase().trim();
      const priceValue = parseFloat(filterPrice.value);
      const availValue = filterAvailability.value.toLowerCase().trim();
      
      // جلب الصفوف
      const rows = tableBody.querySelectorAll("tr");
  
      rows.forEach(row => {
        // قراءة البيانات من الخلايا (تأكد من الأرقام)
        // [2]=Name, [3]=Code, [4]=Category, [5]=Price, [7]=Quantity
        const rowName = row.cells[2].textContent.toLowerCase().trim();
        const rowCode = row.cells[3].textContent.toLowerCase().trim();
        const rowCategory = row.cells[4].textContent.toLowerCase().trim();
        const rowPrice = parseFloat(row.cells[5].textContent);
        const rowQuantity = parseInt(row.cells[7].textContent);
  
        let isvisible = true;
  
        // شروط الفلترة
        if (nameValue && !rowName.includes(nameValue)) isvisible = false;
        if (categoryValue && rowCategory !== categoryValue) isvisible = false;
        if (codeValue && !rowCode.includes(codeValue)) isvisible = false;
        if (!isNaN(priceValue) && rowPrice > priceValue) isvisible = false;
        
        // شرط التوفر
        if (availValue === "instock" && rowQuantity <= 0) isvisible = false;
        if (availValue === "outofstock" && rowQuantity > 0) isvisible = false;
  
        // إظهار/إخفاء
        if (isvisible) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
      
      // (اختياري) إغلاق المودال بعد الضغط على فلتر
      closeModal();
    }
  
    // ربط زر الفلتر
    if (filterMoladbtn) {
        filterMoladbtn.addEventListener("click", filterProducts);
    }
  
    // --- 5. كود حذف الصفوف (Event Delegation) ---
    if (tableBody) {
      tableBody.addEventListener("click", (event) => {
          // البحث عن زر الحذف
          const deleteButton = event.target.closest(".delete");
          if (deleteButton) {
              event.preventDefault(); // لمنع صعود الرابط للأعلى
              const rowToDelete = deleteButton.closest("tr");
              if (rowToDelete) {
                  rowToDelete.remove();
              }
          }
          
          // البحث عن زر التعديل (للذهاب لصفحة الإنشاء)
          // ملاحظة: هذا ليس ضرورياً إذا كنت تستخدم href في الـ HTML
          /*
          const editButton = event.target.closest(".edit");
          if (editButton) {
             // window.location.href = "../create_product/index.html";
          }
          */
      });
    }
  
    // --- 6. كود القائمة النشطة ---
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach(n => n.classList.remove("active"));
        item.classList.add("active");
      });
    });
  
});

