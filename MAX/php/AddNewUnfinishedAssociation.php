<?php
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\login.php');
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\main_functions.php');

$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die("Fatal Error");

$stmt = $conn->prepare('INSERT INTO _table_associations (_type, _name, _associations_id) VALUES(?,?,?)');
$stmt->bind_param('ssi', $type, $name, $AID);

$type   = mysql_entities_fix_string($conn, $_POST['type']);
$name   = mysql_entities_fix_string($conn, $_POST['name']);
$AID    = 0;

$stmt->execute();
$stmt->close();
$conn->close();
echo "hello world ajax";

?>