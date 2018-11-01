<?php
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\login.php');
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\main_functions.php');

$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die("Fatal Error");

$stmt = $conn->prepare('INSERT INTO _table_person (_name, _date_birth, _date_death, _bio, _bio_image) VALUES(?,?,?,?,?)');
$stmt->bind_param('sssss', $name, $dob, $dod, $bio, $image);

$name   = mysql_entities_fix_string($conn, $_POST['name']);
$dob    = mysql_entities_fix_string($conn, $_POST['date_birth']);
$dod = mysql_entities_fix_string($conn, $_POST['date_death']);
$bio     =  mysql_entities_fix_string($conn, $_POST['summary']);
$image     = mysql_entities_fix_string($conn, $_POST['bio_image']);
$stmt->execute();
$stmt->close();
$conn->close();
echo <<<_END
<script>
window.location.href="http://localhost/MAX/index.html";
</script>
_END;
?>