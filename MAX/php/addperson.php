<?php
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\login.php');
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\main_functions.php');

$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die("Fatal Error");
try {
    $stmt = $conn->prepare('INSERT INTO _table_person (_name, _date_birth, _date_death, _bio, _bio_image, _associations_list, _sourced_references) VALUES(?,?,?,?,?,?,?)');
    $stmt->bind_param('sssssss', $name, $dob, $dod, $bio, $image, $associations, $references);

    $name = mysql_entities_fix_string($conn, $_POST['name']);
    $dob = mysql_entities_fix_string($conn, $_POST['date_birth']);
    $dod = mysql_entities_fix_string($conn, $_POST['date_death']);
    $bio = mysql_entities_fix_string($conn, $_POST['summary']);
    $image = mysql_entities_fix_string($conn, $_POST['bio_image']);
    $associations = mysql_entities_fix_string($conn, $_POST['associations']);
    $references = mysql_entities_fix_string($conn, $_POST['source']);
    $stmt->execute();
    $stmt->close();
}catch(Exception $e){
    echo $e;
}
$last_id = $conn->insert_id;

$stmt2 = $conn->prepare('INSERT INTO _table_associations (_type, _name, _associations_id) VALUES(?,?,?)');
$stmt2->bind_param('ssi', $type, $name, $AID);

$type   = "person";
$name   = mysql_entities_fix_string($conn, $_POST['name']); ;
$AID    = $last_id;

$stmt2->execute();
$stmt2->close();
$conn->close();

echo <<<_END
<script>
window.location.href="http://localhost/MAX/index.html";
</script>
_END;
?>