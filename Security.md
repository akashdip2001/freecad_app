| All repo | main | Old |
|---|---|---|

<p align="center">
  <img src="https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/8ade5922-834e-4910-8880-2c13ecc600fc" width="30%" height="30%">
  <img src="https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/d3ddf6ce-18c8-4d24-a0d1-d473d754eb68" width="30%" height="30%">
  <img src="https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/e70bc65e-fc85-48d0-a26b-e52adfcfb799" width="30%" height="30%">
</p>

# This modification adds an alert function to display a popup with the same message

```html
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

---
The alert function doesn't provide much customization, including text size adjustments. For a more flexible and user-friendly solution, you can create a custom modal dialog. Here's an updated version of the script that displays a custom modal with increased text size:

```html
<!-- Add this script at the end of your HTML body -->

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

---
<h1> for Desktop </h1>

# Blur complet page - Desktop mode - Except "Action Button"

```html
    <script>
        // Function to check if the user is on a desktop device
        function isDesktop() {
            return window.innerWidth > 768; // Adjust the width based on your design
        }

        // Check if the user is on a desktop and apply backdrop blur with increased intensity if true
        window.addEventListener('DOMContentLoaded', function () {
            if (isDesktop()) {
                document.body.style.filter = "blur(10px)"; // Increase the blur intensity by adjusting the value (e.g., 10px)
                document.body.style.pointerEvents = "none"; // Disable pointer events on the body

                // Enable pointer events on the Subscribe button
                var subscribeButton = document.querySelector('.Action-button a');
                if (subscribeButton) {
                    subscribeButton.style.pointerEvents = "auto";
                }
            }
        });
    </script>
```

---
# Disable Right Click
```html
 <script>
        // Function to disable right-click context menu
        function disableRightClick(event) {
            event.preventDefault();
        }

        // Attach the disableRightClick function to the contextmenu event
        window.addEventListener('contextmenu', disableRightClick);
    </script>
```

---
# Automatic redirect another site
```html
<script>
        // Function to check if the user is on a desktop device
        function isDesktop() {
            return window.innerWidth > 768; // Adjust the width based on your design
        }

        // Function to redirect to another page
        function redirectToAnotherPage() {
            window.location.href = 'https://akashdip2001.github.io/404/';
        }

        // Check if the user is on a desktop and redirect if true
        window.addEventListener('DOMContentLoaded', function () {
            if (isDesktop()) {
                redirectToAnotherPage();
            }
        });
    </script>
```

---
<h1> for mobile </h1>
# in mobile - when opening or refresh the page - ask for a password "...100"

```html
<script>
    function isMobile() {
      return window.innerWidth <= 768;
    }

    window.addEventListener('DOMContentLoaded', function() {
      if (isMobile()) {
        // Blur the page
        document.body.style.filter = "blur(25px)";
        document.body.style.pointerEvents = "none";

        // Ask for password
        var password = prompt("Please enter the password:");

        // Check password
        if (password !== "akashdip100") {
          // Redirect to 404.html on wrong password
          window.location.href = "404.html";
        } else {
          // Remove blur and pointer events on correct password
          document.body.style.filter = "";
          document.body.style.pointerEvents = "";
        }
      }
    });
</script>
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# Screen-short Block ( html ) ❌❌❌

Protecting web page screenshots or screen recordings is challenging since it depends on the capabilities and security of the device and browser used to access the content. While it's impossible to make screenshots or screen recordings completely foolproof, you can take some measures to make it more difficult for users to capture your content.

Here are a few strategies you can consider:

### Disable Right-Click:
You can use JavaScript to disable the right-click context menu, which often includes an option to save or capture the page.

```html
<script>
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
</script>
```

### Overlay Transparent Div:
You can overlay a transparent div on top of your content to prevent interactions like clicking or selecting. This won't stop all screen capture methods, but it adds an extra layer.

```html
<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        pointer-events: none; /* Allows click-through */
    }
</style>

<div class="overlay"></div>
```

### Watermark:
You can watermark your content, making it less appealing for unauthorized use. However, this won't prevent capturing.

```html
<style>
    .watermark {
        position: fixed;
        bottom: 10px;
        right: 10px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
    }
</style>

<div class="watermark">Your Watermark Here</div>
```

### Disable Print Styles:
You can use print styles to hide or obfuscate content when someone tries to print the page. Keep in mind that this won't prevent screenshots.

```html
<style>
    @media print {
        body {
            display: none;
        }
    }
</style>
```

### DRM (Digital Rights Management):
For more robust protection, consider using Digital Rights Management solutions. These are typically third-party services that provide more advanced protection mechanisms.

Remember that no method is foolproof, and determined users can still find ways to capture content. The goal is to make it inconvenient and to deter casual users. If content protection is critical, consulting with a security professional or considering server-side rendering with restricted access might be more appropriate.

# Screen-short Block ( app ) ✅✅✅

```java
package com.akashdipmahapatra.freecad;

import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ProgressBar;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private FrameLayout frameLayout;
    private ProgressBar progressBar;
    private View mCustomView;
    private WebChromeClient.CustomViewCallback mCustomViewCallback;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Block screenshots and screen recording
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webView);
        frameLayout = findViewById(R.id.frameLayout);
        progressBar = findViewById(R.id.progressBar);

        setupWebView();

        String url = "https://tiny-hamster-b2a057.netlify.app";
        webView.loadUrl(url);
    }

    private void setupWebView() {
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webView.setWebViewClient(new MyWebViewClient());
        webView.setWebChromeClient(new MyWebChromeClient());
        // Block screen rotation except during video fullscreen
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
    }

    private class MyWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri url = request.getUrl();
            if (isSocialMediaUrl(url.toString())) {
                openExternalLink(url.toString());
                return true;
            } else {
                return false;
            }
        }

        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {
            super.onPageStarted(view, url, favicon);
            progressBar.setVisibility(View.VISIBLE);
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);
            progressBar.setVisibility(View.GONE);
        }

        private boolean isSocialMediaUrl(String url) {
            return url.startsWith("https://www.youtube.com/channel/") ||
                    url.startsWith("https://www.facebook.com/") ||
                    url.startsWith("https://www.instagram.com/") ||
                    url.startsWith("https://www.linkedin.com/");
        }

        private void openExternalLink(String url) {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            startActivity(intent);
        }
    }

    private class MyWebChromeClient extends WebChromeClient {

        @Override
        public void onShowCustomView(View view, CustomViewCallback callback) {
            if (mCustomView != null) {
                callback.onCustomViewHidden();
                return;
            }

            mCustomView = view;
            mCustomViewCallback = callback;

            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
            webView.setVisibility(View.GONE);
            frameLayout.addView(view);
            frameLayout.setVisibility(View.VISIBLE);

            getSupportActionBar().hide();
        }

        @Override
        public void onHideCustomView() {
            if (mCustomView == null) {
                return;
            }

            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
            webView.setVisibility(View.VISIBLE);
            frameLayout.removeView(mCustomView);
            frameLayout.setVisibility(View.GONE);

            getSupportActionBar().show();

            if (webView != null) {
                webView.reload();
            }

            mCustomView = null;

            if (mCustomViewCallback != null) {
                mCustomViewCallback.onCustomViewHidden();
            }
        }
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        // Handle configuration changes if necessary
    }
}
```
