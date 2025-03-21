let draggedElement;

// Select all draggable elements
const draggables = document.querySelectorAll('.draggable');

draggables.forEach(div => {
  // When starting to drag, store the dragged element reference
  div.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
  });

  // Allow dragover to enable dropping by preventing default behavior
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // When dropped, swap the background images of the dragged element and the target element
  div.addEventListener('drop', (e) => {
    e.preventDefault();
    // Prevent swapping the element with itself
    if (draggedElement === e.target) return;

    // Swap the backgroundImage styles
    const draggedBg = draggedElement.style.backgroundImage;
    const targetBg = e.target.style.backgroundImage;
    draggedElement.style.backgroundImage = targetBg;
    e.target.style.backgroundImage = draggedBg;
  });
});
