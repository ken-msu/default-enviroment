// src/js/app.js

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    const fetchButton = document.getElementById('fetchButton');
  
    // Add a click event listener to the button
    fetchButton.addEventListener('click', function () {
    // Get the container and list elements by their IDs
    const dataContainer = document.getElementById('dataContainer');
    const dataList = document.getElementById('dataList');
  
    // Fetch data from an example API
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        // Process and display fetched data
        dataContainer.style.display = 'block'; // Show the data container
  
        // Iterate through the data and create list items
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = item.title;
          dataList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    });




    const primaryButton = document.getElementById('primaryButton');
  
    // Add a click event listener to the button
    primaryButton.addEventListener('click', function () {
      // Toggle the 'bg-blue-500' class on button click
        alert('Button 1 Clicked');
    });


    const secondaryButton = document.getElementById('secondaryButton');
  
    // Add a click event listener to the button
    secondaryButton.addEventListener('click', function () {
        alert('Button 2 Clicked');
    });


    const toggleButton = document.getElementById('toggleButton');
  
    // Add a click event listener to the button
    toggleButton.addEventListener('click', function () {
      // Toggle the 'bg-blue-500' class on button click
        toggleButton.classList.toggle('bg-purple-500');
        toggleButton.classList.toggle('bg-blue-500');
    });

});
  