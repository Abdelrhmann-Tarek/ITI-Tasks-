let imgs = document.querySelectorAll("#right img");
let right = document.getElementById("right");
let left = document.getElementById("left");

let draggedImg = null;
let sourceContainer = null;

// عند بدء السحب
imgs.forEach(img => {
  img.setAttribute("draggable", true);
  img.addEventListener("dragstart", function (e) {
    draggedImg = e.target;
    sourceContainer = e.target.parentElement;
    e.dataTransfer.setData("src", draggedImg.getAttribute("src"));
  });
});

// إعداد المناطق للسحب
[right, left].forEach(container => {
  container.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  container.addEventListener("drop", function (e) {
    e.preventDefault();

    let src = e.dataTransfer.getData("src");

    // لو تم السحب داخل نفس المكان، تجاهل
    if (e.currentTarget === sourceContainer) return;

    // عند السحب من المخزن (right)
    if (sourceContainer === right) {
      let stock = parseInt(draggedImg.getAttribute("data-stock"));
      if (stock > 0) {
        draggedImg.setAttribute("data-stock", stock - 1);
        // أضف نسخة جديدة
        let newImg = document.createElement("img");
        newImg.src = src;
        newImg.setAttribute("draggable", true);
        e.currentTarget.appendChild(newImg);

        // أعِد تفعيل السحب على الصورة الجديدة
        setDragEvents(newImg);
      }
    } else {
      // السحب من left إلى right أو العكس (نقل العنصر)
      e.currentTarget.appendChild(draggedImg);
    }
  });
});

// ترجع الصورة إذا لم تُسقط في مكان صحيح
document.addEventListener("dragend", function (e) {
  if (!e.dataTransfer.dropEffect || e.dataTransfer.dropEffect === "none") {
    if (sourceContainer !== null && draggedImg !== null) {
      sourceContainer.appendChild(draggedImg);
    }
  }

  // إعادة الضبط
  draggedImg = null;
  sourceContainer = null;
});

// تفعيل السحب للصور المضافة ديناميكيًا
function setDragEvents(img) {
  img.addEventListener("dragstart", function (e) {
    draggedImg = e.target;
    sourceContainer = e.target.parentElement;
    e.dataTransfer.setData("src", draggedImg.getAttribute("src"));
  });
}
