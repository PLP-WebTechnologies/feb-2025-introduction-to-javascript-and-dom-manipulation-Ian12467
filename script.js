// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Function to change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    let textToggle = false;

    changeTextBtn.addEventListener('click', function() {
        if (textToggle) {
            dynamicText.textContent = 'This text will change when you click the button below.';
        } else {
            dynamicText.textContent = 'The text has been changed dynamically using JavaScript!';
        }
        textToggle = !textToggle;
    });

    // Function to modify CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleText = document.getElementById('style-text');
    let styleToggle = false;

    changeStyleBtn.addEventListener('click', function() {
        if (styleToggle) {
            styleText.style.color = '';
            styleText.style.fontSize = '';
            styleText.style.backgroundColor = '';
            styleText.classList.remove('highlight');
        } else {
            styleText.style.color = 'blue';
            styleText.style.fontSize = '1.2em';
            styleText.style.backgroundColor = '#f0f0f0';
            styleText.classList.add('highlight');
        }
        styleToggle = !styleToggle;
    });

    // Functions to add or remove elements when buttons are clicked
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const dynamicList = document.getElementById('dynamic-list');
    let itemCount = 1;

    addElementBtn.addEventListener('click', function() {
        // Create a new list item
        const newItem = document.createElement('li');
        newItem.textContent = `Dynamically added item ${itemCount}`;
        
        // Add the new item to the list
        dynamicList.appendChild(newItem);
        
        // Increment the item counter
        itemCount++;
    });

    removeElementBtn.addEventListener('click', function() {
        // Check if there are any items to remove
        if (dynamicList.children.length > 0) {
            // Remove the last item from the list
            dynamicList.removeChild(dynamicList.lastElementChild);
        } else {
            alert('No more items to remove!');
        }
    });
});