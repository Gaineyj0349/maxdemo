<?php
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\login.php');
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\main_functions.php');

$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die("Fatal Error");

$stmt = $conn->prepare('INSERT INTO _table_war (_name, _date_begin, _date_end, _summary, _associations_list, _parties_involved ) VALUES(?,?,?,?,?,?)');
$stmt->bind_param('ssssss', $name, $dob, $dod, $summary, $associations, $pinvolved);

$name   = mysql_entities_fix_string($conn, $_POST['name']);
$dob    = mysql_entities_fix_string($conn, $_POST['date_begin']);
$dod = mysql_entities_fix_string($conn, $_POST['date_end']);
$summary     =  mysql_entities_fix_string($conn, $_POST['summary']);
$pinvolved     = mysql_entities_fix_string($conn, $_POST['who_label']);
$associations     = mysql_entities_fix_string($conn, $_POST['associations']);
$stmt->execute();
$stmt->close();

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