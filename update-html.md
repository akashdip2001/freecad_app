This modification adds an alert function to display a popup with the same message

```
    <!-- Add this script at the end of your HTML body -->
<script>
  // Function to check if the user is on a desktop device
  function isDesktop() {
    return window.innerWidth > 768; // Adjust the width based on your design
  }

  // Function to display the warning message
  function displayDesktopWarning() {
    var warningContainer = document.createElement('div');
    warningContainer.id = 'desktop-warning';
    warningContainer.innerHTML = '<p>⚠️ This page is best viewed on a mobile device. Please switch to a mobile device for optimal experience. ⚠️ @kashdip_mahapatra</p>';

    // Append the warning container to the body
    document.body.insertBefore(warningContainer, document.body.firstChild);

    // Display a popup
    var popupMessage = '❌ This page is best viewed on a mobile device. Please switch to a mobile device for optimal experience. ❌ @kashdip_mahapatra';
    alert(popupMessage);
  }

  // Check if the user is on a desktop and display the warning if true
  window.addEventListener('DOMContentLoaded', function () {
    if (isDesktop()) {
      displayDesktopWarning();
    }
  });
</script>
```

<br><br>
The alert function doesn't provide much customization, including text size adjustments. For a more flexible and user-friendly solution, you can create a custom modal dialog. Here's an updated version of the script that displays a custom modal with increased text size:

```<!-- Add this script at the end of your HTML body -->
<script>
  // Function to create a custom modal
  function createCustomModal(message) {
    var modalContainer = document.createElement('div');
    modalContainer.id = 'custom-modal';
    modalContainer.innerHTML = '<div class="modal-content"><p>' + message + '</p></div>';

    // Append the modal container to the body
    document.body.insertBefore(modalContainer, document.body.firstChild);

    // Apply some styles to the modal for better visibility
    var styles = document.createElement('style');
    styles.innerHTML = `
      #custom-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 20px;
        border: 2px solid #333;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        z-index: 9999;
      }
      .modal-content {
        font-size: 20px; /* Adjust the text size as needed */
      }
    `;
    document.head.appendChild(styles);
  }

  // Function to check if the user is on a desktop device
  function isDesktop() {
    return window.innerWidth > 768; // Adjust the width based on your design
  }

  // Function to display the warning message
  function displayDesktopWarning() {
    var message = 'This page is best viewed on a mobile device. Please switch to a mobile device for optimal experience.';
    createCustomModal(message);
  }

  // Check if the user is on a desktop and display the warning if true
  window.addEventListener('DOMContentLoaded', function () {
    if (isDesktop()) {
      displayDesktopWarning();
    }
  });
</script>
```
![Screenshot (30)](https://github.com/akashdip2001/freecad_app/assets/81384987/a58a3bbb-7cdd-4675-a20d-d8ce77beb026)
