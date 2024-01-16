# freecad_app 


|🍭 [Downlod-app 🍭](https://www.mediafire.com/file/njc51t2ierhir85/akashdipmahapatraFreeCAD.apk/file) |🐥 [in app interface 🐥](https://akashdip2001.github.io/freecad_app/) |❌ [FreeCAD - videos ❌](https://akashdip2001.github.io/404/) |
|-------------------- |-------------------- |-------------------- |

![webapp dev (2)](https://github.com/akashdip2001/freecad_app/assets/81384987/beec1827-4afe-4394-9394-941db53c43db)
![webapp dev (3)](https://github.com/akashdip2001/freecad_app/assets/81384987/979c980e-77e1-432a-b69a-2da4e18f22ad)

# Android studio code

# activity_main.xml
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <WebView
        android:id="@+id/webView"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</LinearLayout>
```
# MainActivity.java
```
package com.example.cadpro;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webView);
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true); // Enable JavaScript if your site requires it

        // Load the URL into the WebView
        webView.loadUrl(getString(R.string.webview_url));
    }
}
```
# AndroidManifes.xml
```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.CADPro"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        tools:targetApi="31">

        <activity
            android:name=".MainActivity"
            android:screenOrientation="portrait"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>

</manifest>
```
# Strings.xml
```
<resources>
    <string name="app_name">CAD pro</string>
    <string name="webview_url">https://akashdip2001.github.io/freecad_app/</string>
</resources>
```

![webapp dev (1)](https://github.com/akashdip2001/freecad_app/assets/81384987/ce9f6d8e-965e-4aed-970e-28d0fa2babb7)
![webapp dev (4)](https://github.com/akashdip2001/freecad_app/assets/81384987/2054e341-77be-413b-aa33-58fa735e574e)
![webapp dev (5)](https://github.com/akashdip2001/freecad_app/assets/81384987/7dd4bb0e-4821-4e26-be0b-a5034561bdcb)
![akashdip Mahapatra 4](https://github.com/akashdip2001/freecad_app/assets/81384987/9c663d1a-3a53-4d47-bdd8-a933bc26001d)

# Update - New app

i select language "java" and minimum sdk "API 29 android 10"

# MainActivity.java

If you're working in an Android Studio project with Kotlin support enabled by default, you might not find a `MainActivity.java` file. Android Studio typically creates the main activity file with a Kotlin extension, such as `MainActivity.kt`. However, you can create a new Java class and set it as the main activity. Here's how:

1. In the Project pane on the left side of Android Studio, navigate to the `app` module.

2. Right-click on the `java` folder (or `src` > `main` > `java`), and choose "New" > "Java Class".

3. Name the class `MainActivity` and set the package according to your application's package structure.

4. In the newly created `MainActivity.java` file, replace the content with the Java code provided earlier.

Now, you should have a `MainActivity.java` file in your project. Remember to update the package name and other parts of the code as needed.

```java
package com.akashdipmahapatra.freecad;

import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private Button refreshButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Disable screen rotation
        setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);

        // Initialize WebView and refresh button
        webView = findViewById(R.id.webView);
        refreshButton = findViewById(R.id.refreshButton);

        // Set up WebView
        setupWebView();

        // Set up refresh button click listener
        refreshButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                webView.reload();
            }
        });
    }

    private void setupWebView() {
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();

                // Check if the link is the YouTube channel link
                if (url.equals("https://www.youtube.com/channel/UCxvmp634YDc41xCWOdvWqoQ?sub_confirmation=1")) {
                    // Open YouTube link in external browser
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
                    return true;
                }

                // Load other links inside the WebView
                view.loadUrl(url);
                return true;
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onReceivedTitle(WebView view, String title) {
                super.onReceivedTitle(view, title);
                // You can use the title to dynamically change the app color
                int color = Color.parseColor("#FF5733"); // Example color
                updateAppColor(color);
            }
        });

        // Load an initial URL
        webView.loadUrl("https://example.com");
    }

    private void updateAppColor(int color) {
        // Update the app color dynamically
        getWindow().setStatusBarColor(color);
        getSupportActionBar().setBackgroundDrawable(new ColorDrawable(color));
    }
}
```

If the `MainActivity.java` file has been created in the `com.akashdipmahapatra.freecad` package, but you still can't find the `activity_main.xml` layout file and the `AndroidManifest.xml` file, it's possible that they haven't been automatically generated.

Here's how you can manually create these files:

### 1. Create `res/layout/activity_main.xml`:

In the `res` folder, create a `layout` folder if it doesn't exist. Inside the `layout` folder, create a new XML file named `activity_main.xml`. This file will contain the layout for your `MainActivity`. Below is a simple example:

```xml
<!-- res/layout/activity_main.xml -->
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <WebView
        android:id="@+id/webView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_above="@+id/toolbar" />

    <Button
        android:id="@+id/refreshButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentEnd="true"
        android:layout_margin="16dp"
        android:text="Refresh" />

</RelativeLayout>
```

### 2. Create `AndroidManifest.xml`:

If the `AndroidManifest.xml` file doesn't exist, you can create it manually. In the `app` module, navigate to the `src/main` directory and create a new XML file named `AndroidManifest.xml`. Below is a basic example:

```xml
<!-- app/src/main/AndroidManifest.xml -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.akashdipmahapatra.freecad">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">

        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>

</manifest>
```

Make sure to replace `"com.akashdipmahapatra.freecad"` with your actual package name and customize other parts of the code as needed.

After creating these files, your project structure should look something like this:

```
app
|-- src
|   |-- main
|       |-- java
|           |-- com
|               |-- akashdipmahapatra
|                   |-- freecad
|                       |-- MainActivity.java
|       |-- res
|           |-- layout
|               |-- activity_main.xml
|       |-- AndroidManifest.xml
```

Remember to sync your project after adding these files. You can do this by clicking on "File" -> "Sync Project with Gradle Files" in Android Studio.
