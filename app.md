# AndroidManifest_xml

![AndroidManifest_xml](https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/9047786b-64a8-451b-bf33-163b7e0349f8)

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.akashdipmahapatra.freecad">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="freecad"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|uiMode|screenSize|smallestScreenSize"
            android:theme="@style/AppTheme.NoActionBar"
            android:screenOrientation="portrait">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>
</manifest>
```

# MainActivity_java

![MainActivity_java](https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/6f76b33b-55fc-4c92-8584-908840e3aa45)

```java
package com.akashdipmahapatra.freecad;

import android.content.pm.ActivityInfo;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.FrameLayout;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private FrameLayout videoContainer;
    private View customView;
    private WebChromeClient.CustomViewCallback customViewCallback;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Use FLAG_SECURE to block screenshots and screen recording
        getWindow().setFlags(
                WindowManager.LayoutParams.FLAG_SECURE,
                WindowManager.LayoutParams.FLAG_SECURE);

        // Set fullscreen mode
        getWindow().setFlags(
                WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        setContentView(R.layout.activity_main);

        // Display welcome message after a delay
        new Handler().postDelayed(() -> showToast("Akashdip Mahapatra ME 3rdY"), 2000); // Delay: 2000 milliseconds (2 seconds)

        webView = findViewById(R.id.webView);
        videoContainer = findViewById(R.id.videoContainer);

        webView.setWebViewClient(new MyWebViewClient());
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        // Enable fullscreen support for videos
        webView.getSettings().setPluginState(WebSettings.PluginState.ON);
        webView.setWebChromeClient(new MyWebChromeClient());

        // Load your website
        webView.loadUrl("https://tiny-hamster-b2a057.netlify.app");
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    private class MyWebChromeClient extends WebChromeClient {

        @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
        @Override
        public void onShowCustomView(View view, CustomViewCallback callback) {
            if (customView != null) {
                callback.onCustomViewHidden();
                return;
            }

            customView = view;
            customViewCallback = callback;

            videoContainer.addView(view);
            videoContainer.setVisibility(View.VISIBLE);
            webView.setVisibility(View.GONE);

            setStatusBarVisibility(false);

            // Set screen orientation to landscape when entering fullscreen
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
        }

        @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
        @Override
        public void onHideCustomView() {
            if (customView != null && customViewCallback != null) {
                customViewCallback.onCustomViewHidden();
            }

            videoContainer.removeView(customView);
            videoContainer.setVisibility(View.GONE);
            webView.setVisibility(View.VISIBLE);

            customView = null;

            setStatusBarVisibility(true);

            // Set screen orientation back to portrait when exiting fullscreen
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    private void setStatusBarVisibility(boolean visible) {
        if (visible) {
            getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        } else {
            getWindow().getDecorView().setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
                            View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
                            View.SYSTEM_UI_FLAG_FULLSCREEN
            );
        }
    }

    private void showToast(String message) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
    }
}
```

# MyWebChromeClint_java

![MyWebChromeClint_java](https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/2e543faa-a06e-4b68-a9a3-bb47036412be)

```java
package com.akashdipmahapatra.freecad;

import android.os.Build;
import android.view.View;
import android.webkit.WebChromeClient;

import androidx.annotation.RequiresApi;

public class MyWebChromeClient extends WebChromeClient {

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @Override
    public void onShowCustomView(View view, CustomViewCallback callback) {
        // Implementation remains the same as before
    }

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @Override
    public void onHideCustomView() {
        // Implementation remains the same as before
    }
}
```

# MyWebViewClint_java

![MyWebViewClint_java](https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/65dd07a7-d917-461a-b951-926f11bb666e)

```java
package com.akashdipmahapatra.freecad;

import android.content.Intent;
import android.net.Uri;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MyWebViewClient extends WebViewClient {

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        String url = request.getUrl().toString();

        // Check if the URL is a social media link
        if (isSocialMediaUrl(url)) {
            // Open the URL in the browser
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            view.getContext().startActivity(intent);
            return true; // Prevent the WebView from loading the URL
        }

        // Load the URL in the WebView
        view.loadUrl(url);
        return true;
    }

    private boolean isSocialMediaUrl(String url) {
        return url.startsWith("https://www.youtube.com/channel/") ||
                url.startsWith("https://www.facebook.com/") ||
                url.startsWith("https://www.instagram.com/") ||
                url.startsWith("https://www.linkedin.com/");
    }
}
```

# activity_main_xml

![activity_main_xml](https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/d63874f4-ea16-4f52-ad46-10ddcf954531)

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <FrameLayout
        android:id="@+id/videoContainer"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

    <WebView
        android:id="@+id/webView"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
</RelativeLayout>
```

# style_xml

![style_xml](https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/08c2e979-cc85-483e-9090-31ebe5cba248)

```xml
<resources>
    <!-- Base application theme -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">
        <!-- Customize your theme here. -->
        <item name="android:windowFullscreen">true</item> <!-- Enable fullscreen -->
        <item name="android:windowContentOverlay">@null</item> <!-- Remove the content overlay -->
        <item name="colorPrimary">@color/colorPrimary</item>
        <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
        <item name="colorAccent">@color/colorAccent</item>
    </style>

    <style name="AppTheme.NoActionBar">
        <item name="windowActionBar">false</item>
        <item name="windowNoTitle">true</item>
    </style>
</resources>
```

# colore_xml

![colore_xml](https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/919e8e0b-3482-4ab0-b8bc-f7c712fa89da)

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="purple_200">#FFBB86FC</color>
    <color name="purple_500">#FF6200EE</color>
    <color name="purple_700">#FF3700B3</color>
    <color name="teal_200">#FF03DAC5</color>
    <color name="teal_700">#FF018786</color>
    <color name="black">#FF000000</color>
    <color name="white">#FFFFFFFF</color>


    <color name="colorPrimary">#6200EE</color>
    <color name="colorPrimaryDark">#3700B3</color>
    <color name="colorAccent">#03DAC5</color>


</resources>
```

[source code + apk](https://github.com/Engineering-college-btech/custom-video-player/releases/tag/freecad_2.0)

# Update for Login Page (http error)

To fix the "net::ERR_CLEARTEXT_NOT_PERMITTED" error in your Android app, you need to enable cleartext traffic for the specific domain you are trying to access. In your case, it's "https://freecadapp2.000.pe/".

To enable cleartext traffic for this domain, you can add a network security configuration file to your project and specify the domain in it.

Here's how you can do it:

1. Create a new XML file in the `res/xml` directory of your Android project. You can name it `network_security_config.xml`.

2. Add the following content to the `network_security_config.xml` file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">freecadapp2.000.pe</domain>
    </domain-config>
</network-security-config>
```

This configuration explicitly allows cleartext traffic (HTTP) for the domain "freecadapp2.000.pe".

3. Now, update your `AndroidManifest.xml` to use this network security configuration file:

```xml
<application
    android:networkSecurityConfig="@xml/network_security_config"
    ...>
    ...
</application>
```

With these changes, your app should now allow connections to "https://freecadapp2.000.pe/" over HTTP, and you shouldn't encounter the "net::ERR_CLEARTEXT_NOT_PERMITTED" error anymore.
