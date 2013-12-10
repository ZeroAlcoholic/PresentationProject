<?php
	echo 'test';
	echo $data;
	if(!empty($_POST['ans'])){
		$data = $_POST['ans'];
		$fname = "answer.txt";//generates random name

		$file = fopen($fname, 'w');//creates new file
		fwrite($file, $data);
		fclose($file);
	}
?>
