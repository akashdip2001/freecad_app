| [README.md](https://github.com/Engineering-college-btech/custom-video-player/edit/main/README.md) | [2nd repo.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/2nd%20repository.md) | [Security.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/Security.md) | [Style.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/Style.md) | [app.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/app.md) | [Login.md](https://github.com/Engineering-college-btech/custom-video-player/blob/main/login.md)
|---|---|---|---|---|---|

# Log in project

![Screenshot (84)](https://github.com/Engineering-college-btech/custom-video-player/assets/81384987/792d43b3-da9f-4756-804e-93ab0fd01a11)


# index.php
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
        <h1>Welcome to our website</h1>
        <a href="signup.php" class="button">Sign Up</a>
        <a href="login.php" class="button">Login</a>
    </div>
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

        .signup-button:hover {
            background-color: #3498db; /* Change background on hover */
            color: #fff; /* Change text color on hover */
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
    <a href="signup.php" class="signup-button">If you don't have an account, please sign up first</a>
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
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: transparent;
            color: #3498db;
            padding: 10px 15px;
            border: 2px solid #3498db;
            border-radius: 3px;
            cursor: pointer;
        }

        .error {
            color: red;
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
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
        }
    </style>
</head>
<body>
    <h1>Sign Up</h1>
    <form action="register.php" method="post">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="email" name="email" placeholder="Email"><br>
        <input type="password" name="password" placeholder="Password"><br>
        <input type="submit" value="Sign Up">
    </form>
    <a href="login.php" class="login-button">If already have an account - login</a>
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

    // Check if email ends with "edu.in"
    if (!preg_match("/@(.+)\.edu\.in$/", $email)) {
        $signup_error = "must use collage email";
    } else {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // SQL to insert data into table
        $sql = "INSERT INTO user (username, email, password) VALUES ('$username', '$email', '$hashed_password')";

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
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: transparent;
            color: #3498db;
            padding: 10px 15px;
            border: 2px solid #3498db;
            border-radius: 3px;
            cursor: pointer;
        }

        .error {
            color: red;
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
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
        }
    </style>
</head>
<body>
    <h1>Sign Up</h1>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="email" name="email" placeholder="Email"><br>
        <input type="password" name="password" placeholder="Password"><br>
        <input type="submit" value="Sign Up">
    </form>
    <div class="error"><?php echo $signup_error; ?></div>
    <a href="login.php" class="login-button">If already have an account - login</a>
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
