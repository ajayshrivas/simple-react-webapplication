<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "react_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "INSERT INTO react_db_contactform (name, email,subject,massage)
	VALUES ('".$_POST['name']."', '".$_POST['email']."','".$_POST['subject']."','".$_POST['massage']."')";
if(mysqli_query($conn,$sql)) {
$data = array("data" => "You Data added successfully");
	echo json_encode($data);
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}
?>  