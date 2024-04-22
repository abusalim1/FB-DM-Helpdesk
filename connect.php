<?php
$userName = $_POST['userName'];
$email = $_POST['email'];
$password = $_POST['password'];
echo "Received userName: " . $userName . "<br>";
echo "Received email: " . $email . "<br>";
echo "Received password: " . $password . "<br>";
// Database connection
$conn = new mysqli('localhost', 'root', '', 'authentication');
if ($conn->connect_error) {
echo "Connection Failed: " . $conn->connect_error;
die();
}

$stmt = $conn->prepare("INSERT INTO user (userName, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $userName, $email, $password);

if ($stmt->execute()) {
echo "Registration successfully added.";
} else {
echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
