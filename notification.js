// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all user cards
    const userCards = document.querySelectorAll(".user-card");
  
    // Add event listeners to each card's buttons
    userCards.forEach((card, index) => {
      const acceptBtn = card.querySelector(".accept-btn");
      const rejectBtn = card.querySelector(".reject-btn");
      const username = card.querySelector(".username").textContent;
  
      // Add click event for Accept button
      acceptBtn.addEventListener("click", function () {
        handleAccept(card, username, index);
      });
  
      // Add click event for Reject button
      rejectBtn.addEventListener("click", function () {
        handleReject(card, username, index);
      });
    });
  
    // Function to handle Accept button click
    function handleAccept(card, username, index) {
      // Create notification
      showNotification(`Accepted ${username}`, "success");
  
      // Visual feedback
      card.style.transition = "all 0.5s ease";
      card.style.backgroundColor = "rgba(144, 238, 144, 0.3)";
      card.style.borderLeft = "5px solid #4CAF50";
  
      // Disable buttons
      disableButtons(card);
  
      // Log action (in a real app, this would be an API call)
      console.log(`User ${username} (ID: ${index + 1}) has been accepted`);
    }
  
    // Function to handle Reject button click
    function handleReject(card, username, index) {
      // Create notification
      showNotification(`Rejected ${username}`, "error");
  
      // Visual feedback - fade out and reduce height
      card.style.transition = "all 0.8s ease";
      card.style.opacity = "0.6";
      card.style.backgroundColor = "rgba(255, 99, 71, 0.1)";
      card.style.borderLeft = "5px solid #FF6347";
  
      // Disable buttons
      disableButtons(card);
  
      // Log action (in a real app, this would be an API call)
      console.log(`User ${username} (ID: ${index + 1}) has been rejected`);
    }
  
    // Function to disable buttons after action
    function disableButtons(card) {
      const buttons = card.querySelectorAll("button");
      buttons.forEach((button) => {
        button.disabled = true;
        button.style.opacity = "0.5";
        button.style.cursor = "default";
      });
    }
  
    // Function to show notification
    function showNotification(message, type) {
      // Create notification element
      const notification = document.createElement("div");
      notification.className = `notification ${type}`;
      notification.textContent = message;
  
      // Style based on type
      if (type === "success") {
        notification.style.backgroundColor = "rgba(76, 175, 80, 0.9)";
      } else if (type === "error") {
        notification.style.backgroundColor = "rgba(255, 99, 71, 0.9)";
      }
  
      // Add styles
      notification.style.color = "white";
      notification.style.padding = "12px 20px";
      notification.style.borderRadius = "4px";
      notification.style.position = "fixed";
      notification.style.top = "20px";
      notification.style.right = "20px";
      notification.style.zIndex = "1000";
      notification.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      notification.style.fontFamily = "Poppins, sans-serif";
  
      // Add to DOM
      document.body.appendChild(notification);
  
      // Remove after 3 seconds
      setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transition = "opacity 0.5s ease";
  
        // Remove from DOM after fade out
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 500);
      }, 3000);
    }
  });
  