document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-example');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the form input values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const age = document.getElementById('Age').value;
  
      // Perform validation
      if (name.trim() === '' || email.trim() === '' || age.trim() === '') {
        alert('Please fill in all fields.');
        return; // Exit the function if any field is empty
      }
  
      // If all fields are filled, submit the form
      // You can perform further actions here, such as sending data to a server
  
      // For example, you can log the form data to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Age:', age);
      alert("Registation Complete")
  
      // Reset the form after submission (optional)
      form.reset();
    });
  });
  