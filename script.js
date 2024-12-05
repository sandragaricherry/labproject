// Function to show an alert when a link is clicked
function showAlert(pageName) {
    alert('You are being redirected to the ' + pageName + ' page!');
  }
  
  // Attach the function to navigation links
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default navigation
      showAlert(link.textContent); // Show the alert with the link text
      window.location.href = link.href; // Redirect after alert
    });
  });