<?php

  header('Content-type: application/json');
  define('DB_HOST', '127.0.0.1');
  define('DB_USERNAME', 'root');
  define('DB_PASSWORD','');
  define('DB_NAME','chartdb');
  $mysqli = new mysqli(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME);
  if(!$mysqli){
    die("Connection failed:" . $mysqli->error);
  }
  $query = sprintf("SELECT team, matchname, score FROM matchscore ORDER BY matchname");
  $result = $mysqli->query($query);
  $data = array();
  foreach($result as $row){
    $data[] = $row;
  }
  $result->close();
  $mysqli->close();
  print json_encode($data);
?>