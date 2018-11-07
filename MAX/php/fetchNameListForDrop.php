<?php
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\login.php');
require_once ('C:\Program Files (x86)\Ampps\www\MAX\php\main_functions.php');

/**
 * Created by PhpStorm.
 * User: gaine
 * Date: 11/1/2018
 * Time: 10:06 PM
 */

$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die("Fatal Error");

$type = mysql_entities_fix_string($conn, $_POST['type']);


$query  = "SELECT DISTINCT _name FROM _table_associations WHERE _type LIKE '$type'";

$result = $conn->query($query);
if (!$result) die ("Database access failed");

$rows = $result->num_rows;

for ($j = 0 ; $j < $rows ; $j++)
{
    $result->data_seek($j);
    $row = $result->fetch_array(MYSQLI_NUM);
    $arrayOut[] = htmlspecialchars($row[0]);
}
sort($arrayOut, SORT_STRING);
array_unshift($arrayOut, "Select");

echo json_encode($arrayOut);