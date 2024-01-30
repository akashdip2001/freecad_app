| [README.md](https://github.com/Engineering-college-btech/custom-video-player/edit/main/README.md) | [2nd repo.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/2nd%20repository.md) | [Security.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/Security.md) | [Style.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/Style.md) | [app.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/app.md) | [Login.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/login.md)
|---|---|---|---|---|---|

# Log in project

![Screenshot (84)](https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/792d43b3-da9f-4756-804e-93ab0fd01a11)


# index.php (simple) ❌❌❌
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="icon" href="https://raw.githubusercontent.com/akashdip2001/website-2/main/images/favicon.jpg?token=GHSAT0AAAAAACMGYPVOP4ZUPUDP4Q2FKSEWZNNHMWA">

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }

        h1 {
            color: #333;
            font-size: 24px; /* Adjusted font size for better visibility on mobile */
            padding: 0 20px; /* Added padding to ensure text doesn't overflow */
        }

        .button-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 10px;
            cursor: pointer;
            border-radius: 5px;
        }

        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="button-container">
        <h1>Welcome to my App</h1>
        <a href="signup.php" class="button">Sign Up</a>
        <a href="login.php" class="button">Login</a>
    </div>
</body>
</html>
```
# index.php (Update) ✅✅✅
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="icon" href="https://raw.githubusercontent.com/akashdip2001/website-2/main/images/favicon.jpg?token=GHSAT0AAAAAACMGYPVOP4ZUPUDP4Q2FKSEWZNNHMWA">

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }

        h1 {
            color: #333;
            font-size: 24px; /* Adjusted font size for better visibility on mobile */
            padding: 0 20px; /* Added padding to ensure text doesn't overflow */
        }

        .button-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 10px;
            cursor: pointer;
            border-radius: 5px;
        }

        .button:hover {
            background-color: #45a049;
        }

        .image-container {
            display: none; /* Initially hide the image container */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent black background */
            z-index: 999; /* Ensure it appears on top of other elements */
            overflow: auto;
        }

        .image-container img {
            display: block;
            margin: auto;
            max-width: 90%; /* Adjust the maximum width of images */
            max-height: 90%; /* Adjust the maximum height of images */
            padding: 20px; /* Add padding around the images */
        }
    </style>
</head>
<body>
    <div class="button-container">
        <h1>Welcome to my app</h1><br>
        <p> Akashdip Mahapatra 3rd year<br>Mechanical Engineering<br>it's my 2nd app 27/01/2024</p><br>
        <p>National Award from India president<br>Pranab Mukherjee 2012<br>Delhi - Vigyan Bhavan</p><br>
        <button onclick="showImages()" class="button">Show Images</button>
        <div class="image-container" id="imageContainer">
            <span onclick="hideImages()" style="color: white; position: absolute; top: 20px; right: 20px; cursor: pointer;">&times;</span>
            <img src="https://akashdipmahapatra.netlify.app/wp-content/uploads/2022/06/Screenshot_20220625-012147_Photos.jpg" alt="Image 1">
            <img src="https://akashdipmahapatra.netlify.app/wp-content/uploads/2022/06/Screenshot_20220625-011521_Photos.jpg" alt="Image 2">
            <img src="https://akashdipmahapatra.netlify.app/wp-content/uploads/2022/06/FKitsPTakAAQf83.jpeg" alt="Image 3">
            <img src="https://akashdipmahapatra.netlify.app/wp-content/uploads/2022/06/FKitrVcakAEVAfK.jpeg" alt="Image 4">
        </div>
        <a href="signup.php" class="button">Sign Up</a>
        <a href="login.php" class="button">Login</a>
    </div>

    <script>
        function showImages() {
            document.getElementById("imageContainer").style.display = "block";
        }

        function hideImages() {
            document.getElementById("imageContainer").style.display = "none";
        }
    </script>
</body>
</html>
```

# login.php
```php
<?php
session_start();

$login_error = ''; // Initialize login error variable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "sql209.byetcluster.com";
    $username = "if0_35853988"; // Replace with your MySQL username
    $password = "eFCjtRCxB8"; // Replace with your MySQL password
    $dbname = "if0_35853988_freecad_app_02_database"; // Replace with your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get form data
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    // Prepare SQL statement to retrieve user data
    $sql = "SELECT * FROM user WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        // User found, verify password
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Password is correct, set session variables
            $_SESSION['username'] = $username;
            // Redirect to home page
            header("Location: home.php");
            exit();
        } else {
            // Password is incorrect
            $login_error = "Invalid password";
        }
    } else {
        // User not found
        $login_error = "User not found";
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="icon" href="https://raw.githubusercontent.com/akashdip2001/website-2/main/images/favicon.jpg?token=GHSAT0AAAAAACMGYPVOP4ZUPUDP4Q2FKSEWZNNHMWA">

    <style>
        /* CSS styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
            position: relative; /* Required for absolute positioning */
        }

        h1 {
            color: #333;
        }

        form {
            max-width: 400px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: transparent; /* Transparent background */
            color: #3498db; /* Button text color */
            padding: 10px 15px;
            border: 2px solid #3498db; /* Add border */
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s; /* Smooth transition effect */
        }

        input[type="submit"]:hover {
            background-color: #3498db; /* Change background on hover */
            color: #fff; /* Change text color on hover */
        }

        .error {
            color: red;
        }

        .signup-button {
            background-color: transparent; /* Transparent background */
            color: #3498db; /* Button text color */
            border: none;
            padding: 10px 15px;
            border-radius: 3px;
            cursor: pointer;
            text-decoration: none;
            display: block;
            position: fixed; /* Positioning at bottom */
            bottom: 20px; /* Distance from bottom */
            left: 50%; /* Center horizontally */
            transform: translateX(-50%); /* Center horizontally */
            width: auto;
            transition: background-color 0.3s, color 0.3s; /* Smooth transition effect */
        }

        //.signup-button:hover {
           // background-color: #3498db; /* Change background on hover */
            //color: #fff; /* Change text color on hover */
        }
    </style>
</head>
<body>
    <h1>Login</h1>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="password" name="password" placeholder="Password"><br>
        <input type="submit" value="Login">
    </form>
    <div class="error"><?php echo $login_error; ?></div>
    <a href="signup.php" class="signup-button">sign up</a>
</body>
</html>
```
# signup.php
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="icon" href="https://raw.githubusercontent.com/akashdip2001/website-2/main/images/favicon.jpg?token=GHSAT0AAAAAACMGYPVOP4ZUPUDP4Q2FKSEWZNNHMWA">

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }

        h1 {
            color: #333;
        }

        form {
            max-width: 400px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="date"],
        input[type="tel"] {
            width: calc(100% - 22px); /* Adjusted width for better alignment */
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
            display: inline-block; /* Ensure inline display */
        }

        input[type="submit"] {
            width: 100%; /* Full width submit button */
            background-color: transparent;
            color: #3498db;
            padding: 10px 15px;
            border: 2px solid #3498db;
            border-radius: 3px;
            cursor: pointer;
        }

        .error {
            color: red;
            font-size: 12px;
            position: relative;
            top: -20px;
        }

        .login-button {
            background-color: transparent;
            color: #3498db;
            border: none;
            padding: 10px 15px;
            border-radius: 3px;
            cursor: pointer;
            text-decoration: none;
            display: block;
            margin-top: 20px; /* Added margin to separate from form */
        }

        /* Make paragraphs slightly transparent and hidden by default */
        form p {
            opacity: 0.8;
            margin-top: 0; /* Remove top margin */
            display: none; /* Hide paragraphs by default */
        }
    </style>
</head>
<body>
    <h1>Sign Up</h1>
    <form action="register.php" method="post">
        <input type="text" name="username" placeholder="Username" onfocus="showParagraph('usernameParagraph')"><br>
        <!-- <p id="usernameParagraph">Enter your username.</p> -->
        <div class="error" id="usernameError"></div> <!-- Error message for username -->
        <input type="email" name="email" placeholder="Email" onfocus="showParagraph('emailParagraph')"><br>
        <p id="emailParagraph">Enter your college email.</p>
        <div class="error" id="emailError"></div> <!-- Error message for email -->
        <input type="tel" name="mobile" placeholder="Mobile Number" onfocus="showParagraph('mobileParagraph')">
        <p id="mobileParagraph">I send you a Watsapp link on this no.</p>
        <div class="error" id="mobileError"></div> <!-- Error message for mobile -->
        <input type="password" name="password" placeholder="Password" onfocus="showParagraph('passwordParagraph')"><br>
        <!-- <p id="passwordParagraph">Enter your password.</p> -->
        <div class="error" id="passwordError"></div> <!-- Error message for password -->
        <input type="date" name="signup_date" id="signup_date" placeholder="Signup Date" onfocus="showParagraph('signupDateParagraph')">
        <p id="signupDateParagraph">Enter Today's date.</p>
        <div class="error" id="signupDateError"></div> <!-- Error message for signup date -->
        <input type="submit" value="Sign Up">
    </form>
    
    <a href="login.php" class="login-button">already registered - login</a>

    <!-- JavaScript to validate form fields -->
    <script>
        // Function to show paragraph when input is focused
        function showParagraph(paragraphId) {
            var paragraph = document.getElementById(paragraphId);
            paragraph.style.display = "block"; // Show paragraph
        }

        document.querySelector('form').addEventListener('submit', function(e) {
            const username = document.querySelector('input[name="username"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const mobile = document.querySelector('input[name="mobile"]').value.trim();
            const password = document.querySelector('input[name="password"]').value.trim();
            const signupDate = document.querySelector('input[name="signup_date"]').value.trim();

            let isValid = true;

            // Validate username
            if (username === '') {
                document.getElementById('usernameError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('usernameError').innerText = '';
            }

            // Validate email
            if (email === '') {
                document.getElementById('emailError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('emailError').innerText = '';
            }

            // Validate mobile number
            if (mobile === '') {
                document.getElementById('mobileError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('mobileError').innerText = '';
            }

            // Validate password
            if (password === '') {
                document.getElementById('passwordError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('passwordError').innerText = '';
            }

            // Validate signup date
            if (signupDate === '') {
                document.getElementById('signupDateError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('signupDateError').innerText = '';
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    </script>
</body>
</html>
```
# register.php
```php
<?php
$servername = "sql209.byetcluster.com";
$username = "if0_35853988"; // Replace with your MySQL username
$password = "eFCjtRCxB8"; // Replace with your MySQL password
$dbname = "if0_35853988_freecad_app_02_database"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$signup_error = ''; // Initialize signup error variable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $mobile = $_POST['mobile']; // New field for mobile number
    $signup_date = $_POST['signup_date']; // New field for signup date

    // Check if email ends with "edu.in"
    if (!preg_match("/@(.+)\.edu\.in$/", $email)) {
        $signup_error = "Must use college email";
    } else {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // SQL to insert data into table
        $sql = "INSERT INTO user (username, email, password, mobile, signup_date) 
                VALUES ('$username', '$email', '$hashed_password', '$mobile', '$signup_date')";

        if ($conn->query($sql) === TRUE) {
            // Redirect user after successful signup
            header("Location: login.php");
            exit();
        } else {
            $signup_error = "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="icon" href="https://raw.githubusercontent.com/akashdip2001/website-2/main/images/favicon.jpg?token=GHSAT0AAAAAACMGYPVOP4ZUPUDP4Q2FKSEWZNNHMWA">

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }

        h1 {
            color: #333;
        }

        form {
            max-width: 400px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="date"],
        input[type="tel"] {
            width: calc(100% - 22px); /* Adjusted width for better alignment */
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
            display: inline-block; /* Ensure inline display */
        }

        input[type="submit"] {
            width: 100%; /* Full width submit button */
            background-color: transparent;
            color: #3498db;
            padding: 10px 15px;
            border: 2px solid #3498db;
            border-radius: 3px;
            cursor: pointer;
        }

        .error {
            color: red;
            font-size: 12px;
            position: relative;
            top: -20px;
        }

        .login-button {
            background-color: transparent;
            color: #3498db;
            border: none;
            padding: 10px 15px;
            border-radius: 3px;
            cursor: pointer;
            text-decoration: none;
            display: block;
            margin-top: 20px; /* Added margin to separate from form */
        
        }
    </style>
</head>
<body>
    <h1>Sign Up</h1>
    <form action="register.php" method="post">
        <input type="text" name="username" placeholder="Username"><br>
        <div class="error" id="usernameError"></div> <!-- Error message for username -->
        <input type="email" name="email" placeholder="Email"><br>
        <div class="error" id="emailError"></div> <!-- Error message for email -->
        <input type="tel" name="mobile" placeholder="Mobile Number"><br>
        <div class="error" id="mobileError"></div> <!-- Error message for mobile -->
        <input type="password" name="password" placeholder="Password"><br>
        <div class="error" id="passwordError"></div> <!-- Error message for password -->
        <input type="date" name="signup_date" id="signup_date" placeholder="Signup Date"><br>
        <div class="error" id="signupDateError"><?php echo $signup_error; ?></div> <!-- Error message for signup date -->
        <input type="submit" value="Sign Up">
    </form>
    <a href="login.php" class="login-button">already registered - login</a>

    <!-- JavaScript to validate form fields -->
    <script>
        document.querySelector('form').addEventListener('submit', function(e) {
            const username = document.querySelector('input[name="username"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const mobile = document.querySelector('input[name="mobile"]').value.trim();
            const password = document.querySelector('input[name="password"]').value.trim();
            const signupDate = document.querySelector('input[name="signup_date"]').value.trim();

            let isValid = true;

            // Validate username
            if (username === '') {
                document.getElementById('usernameError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('usernameError').innerText = '';
            }

            // Validate email
            if (email === '') {
                document.getElementById('emailError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('emailError').innerText = '';
            }

            // Validate mobile number
            if (mobile === '') {
                document.getElementById('mobileError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('mobileError').innerText = '';
            }

            // Validate password
            if (password === '') {
                document.getElementById('passwordError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('passwordError').innerText = '';
            }

            // Validate signup date
            if (signupDate === '') {
                document.getElementById('signupDateError').innerText = 'Empty';
                isValid = false;
            } else {
                document.getElementById('signupDateError').innerText = '';
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    </script>
</body>
</html>
```
# home.php
```php
<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['username'])) {
    // If not logged in, redirect to login page
    header("Location: login.php");
    exit();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
    <style>
        /* CSS for styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            margin-top: 50px;
        }

        h1 {
            color: #333;
        }

        p {
            color: #666;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            text-decoration: none; /* Remove default underline */
        }

        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <!-- Heading -->
    <h1>Welcome, <?php echo $_SESSION['username']; ?>!</h1>
    
    <!-- Paragraph -->
    <p>The passward is subscribe_akashdip.</p>
    
    <!-- Button -->
    <a href="https://engineering-college-btech.github.io/password-html/pRi3sEnT4tIoN7pAsS8wOrD.html" class="button">click</a>
</body>
</html>
```
# SQL
The structure of tables. `user` table for storing user information.

```sql
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

This SQL script creates a table named `user` with the following columns:

- `id`: An auto-incremented integer serving as the primary key.
- `username`: A VARCHAR field to store the username.
- `email`: A VARCHAR field to store the email.
- `password`: A VARCHAR field to store the hashed password.

# Update1 - omlu akashdip2001 can access - userdata.php

# userdata.php
```php
<?php
session_start();

// Check if the user is logged in and is Akashdip Mahapatra
if (!isset($_SESSION['username']) || $_SESSION['username'] !== 'akashdip2001') {
    // If not logged in or not Akashdip Mahapatra, redirect to login page
    header("Location: login.php");
    exit();
}

// Check if the password is entered and correct
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['password'])) {
    $entered_password = $_POST['password'];
    // Check if entered password matches the correct password
    if ($entered_password === 'kali2001') {
        // Password is correct, continue to display user data
    } else {
        // Incorrect password, display error message and exit
        echo "Incorrect password!";
        exit();
    }
} else {
    // If password is not entered, display password popup
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Popup</title>
        <style>
            /* CSS for password popup */
            body {
                font-family: Arial, sans-serif;
                background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh; /* Full viewport height */
                margin: 0;
            }

            .password-popup {
                background-color: #fff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            }

            input[type="password"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 10px;
                box-sizing: border-box;
            }

            input[type="submit"] {
                background-color: #3498db;
                color: #fff;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <div class="password-popup">
            <h2>This page is only for Akashdip Mahapatra</h2>
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <input type="password" name="password" placeholder="Enter Password">
                <br>
                <input type="submit" value="Submit">
            </form>
        </div>
    </body>
    </html>
    <?php
    exit(); // Exit script after displaying password popup
}

// Include database connection
$servername = "sql209.byetcluster.com";
$username = "if0_35853988"; // Replace with your MySQL username
$password = "eFCjtRCxB8"; // Replace with your MySQL password
$dbname = "if0_35853988_freecad_app_02_database"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Users</title>
    <style>
        /* CSS for table styling */
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>User Data</h1>
    <table>
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Signup Date</th>
        </tr>
        <?php
        // Fetch and display user data from the database
        $sql = "SELECT username, email, mobile, signup_date FROM user";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Output data of each row
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["username"] . "</td>";
                echo "<td>" . $row["email"] . "</td>";
                echo "<td>" . $row["mobile"] . "</td>";
                echo "<td>" . $row["signup_date"] . "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No users found</td></tr>";
        }

        // Close database connection
        $conn->close();
        ?>
    </table>
</body>
</html>
```
# home.php ( to access userdata.php )

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
    <style>
        /* General CSS for styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            margin-top: 50px;
        }

        h1 {
            color: #333;
        }

        p {
            color: #666;
            margin-bottom: 20px; /* Added margin for better spacing */
        }

        /* Button CSS */
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            text-decoration: none; /* Remove default underline */
            margin: 10px; /* Added margin for spacing */
        }

        .button:hover {
            background-color: #45a049;
        }

        /* Additional styling for links */
        a {
            text-decoration: none;
            color: #fff; /* Set text color for links */
        }

        /* Styling for the paragraph containing the password */
        .password-info {
            background-color: #ddd; /* Light gray background */
            padding: 10px;
            border-radius: 5px;
            max-width: 400px; /* Limiting width for better readability */
            margin: 0 auto 20px; /* Centering the paragraph and adding margin */
        }
    </style>
</head>
<body>
    <!-- Heading -->
    <h1>Welcome, <?php echo $_SESSION['username']; ?>!</h1>
    
    <!-- Paragraph -->
    <p class="password-info">The password is subscribe_akashdip.</p>
    
    <!-- Button -->
    <a href="https://engineering-college-btech.github.io/password-html/pRi3sEnT4tIoN7pAsS8wOrD.html" class="button">next</a>
    <a href="userdata.php" class="button">Private</a>
    <br>
    <p>This Private button is only for<br>Super-User Akashdip Mahapatra<br>if you are - login again<p>
</body>
</html>
```
# Secutity 1
# added checks for the uniqueness of both email and mobile number in addition to the username. If any of them already exist in the database

# register.php ( php part )
```php
<?php
$servername = "sql209.byetcluster.com";
$username = "if0_35853988"; // Replace with your MySQL username
$password = "eFCjtRCxB8"; // Replace with your MySQL password
$dbname = "if0_35853988_freecad_app_02_database"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$signup_error = ''; // Initialize signup error variable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $mobile = $_POST['mobile']; // New field for mobile number
    $signup_date = $_POST['signup_date']; // New field for signup date

    // Check if username already exists
    $check_username_sql = "SELECT * FROM user WHERE username = ?";
    $check_username_stmt = $conn->prepare($check_username_sql);
    $check_username_stmt->bind_param("s", $username);
    $check_username_stmt->execute();
    $existing_username = $check_username_stmt->get_result()->fetch_assoc();

    // Check if email already exists
    $check_email_sql = "SELECT * FROM user WHERE email = ?";
    $check_email_stmt = $conn->prepare($check_email_sql);
    $check_email_stmt->bind_param("s", $email);
    $check_email_stmt->execute();
    $existing_email = $check_email_stmt->get_result()->fetch_assoc();

    // Check if mobile number already exists
    $check_mobile_sql = "SELECT * FROM user WHERE mobile = ?";
    $check_mobile_stmt = $conn->prepare($check_mobile_sql);
    $check_mobile_stmt->bind_param("s", $mobile);
    $check_mobile_stmt->execute();
    $existing_mobile = $check_mobile_stmt->get_result()->fetch_assoc();

    if ($existing_username) {
        $signup_error = "Username already exists";
    } elseif ($existing_email) {
        $signup_error = "Email already exists,<br>any problam WatsApp 7076033011";
    } elseif ($existing_mobile) {
        $signup_error = "Mobile number already exists";
    } else {
        // Check if email ends with "edu.in"
        if (!preg_match("/@(.+)\.edu\.in$/", $email)) {
            $signup_error = "Must use college email";
        } else {
            // Hash the password
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // SQL to insert data into table
            $sql = "INSERT INTO user (username, email, password, mobile, signup_date) 
                    VALUES (?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssss", $username, $email, $hashed_password, $mobile, $signup_date);
            if ($stmt->execute()) {
                // Redirect user after successful signup
                header("Location: login.php");
                exit();
            } else {
                $signup_error = "Error: " . $stmt->error;
            }
        }
    }
}

$conn->close();
?>
```
# style update - to increse the error msg text size & adjast the position
```css
.error {
            color: red;
            font-size: 15px;
            position: relative;
            top: -30px;
        }
```
