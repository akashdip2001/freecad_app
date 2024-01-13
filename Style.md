| CSS                                      | JavaScript                                           |
|-------------------------------------------|------------------------------------------------------|
| ```css
  .glow {
    animation: glowAnimation 2s infinite;
  }

  @keyframes glowAnimation {
    0%, 100% {
      box-shadow: 0 0 10px #FFD700;
    }
    50% {
      box-shadow: 0 0 20px #FFD700;
    }
  }
  ```                                      | ```javascript
                                            function glowSubscribeButton() {
                                              const subscribeButton = document.querySelector('.bg-red-600');
                                              
                                              // Add glowing effect by toggling the 'glow' class
                                              subscribeButton.classList.add('glow');
                                              setTimeout(() => {
                                                subscribeButton.classList.remove('glow');
                                              }, 2000);
                                            }

                                            // Trigger the glowing effect every 10 seconds
                                            setInterval(glowSubscribeButton, 6000);
                                          ```
                                            |

# but in index

```
<style>
    /* Action buttons */
  .Action-button {
    margin-top: 5%;
  }

  @media (max-width: 768px) {
    .Action-button {
      margin-top: 27%;
    }
  }

     .video-card1 {
    background: #5A5A5A;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 3px;
     }

     
   /* Glowing effect */
  
.Action-button a.glow,
nav a.glow {
  position: relative;
  display: inline-block;
  text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700;
  z-index: 1;
}

.Action-button a.glow {
  animation: glowAnimation 2s infinite;
  box-shadow: 0 0 10px #FFD700;
}

@keyframes glowAnimation {
  0%, 100% {
    box-shadow: 0 0 10px #FFD700;
  }
  50% {
    box-shadow: 0 0 20px #FFD700;
  }
}

  </style>
```
