<?php
    header('Content-Type: application/json');

    require_once("class/helper.php");

    $helper = new helper();

    $response = array();

    if (!isset($_POST['functionName']) || trim($_POST['functionName']) == ""){
        $response = ['status'=> 'ERROR', 'data' => 'No function Name!'];
    }
    if (!isset($_POST['input']) || trim($_POST['input']) == ""){
        $response = ['status'=> 'ERROR', 'data' => 'No input found!'];
    }
    
    if(empty($response))
    {
        // strip trailing & leading spaces
        $inputText = trim($_POST['input']);
       

        if(trim($_POST['functionName']) === "repeatTask")
        {
            // given comma separated input convert to array & remove empty values
            $text = array_filter( explode(",",  $inputText), 'strlen' );

            try {
                $helper->isValidArray($text);
    
                $response = ['status'=> 'SUCCESS', 'data' => $helper->repeat($text, 3)];
                    
            } catch (Exception $ex){
                $response = ['status'=> 'ERROR', 'data' => $ex];
            }
        } 
        else if (trim($_POST['functionName']) === "reformatTask") 
        {
            // special chars need to be removed (vowels)
            $specialChars = ["a","e","i","o","u"];

            $sanitizedText = $helper->removeSpecialsChars(strtolower($inputText), $specialChars);
            
            $response = ['status'=> 'SUCCESS', 'data' => ucfirst($sanitizedText)];

        } 
        else if (trim($_POST['functionName']) === "nextBinaryNumberTask")
        {
            //generate next binary number
            $nextBinaryNumber = $helper->nextBinaryNumber($inputText);
            $response = ['status'=> 'SUCCESS', 'data' => $nextBinaryNumber];
        }
        else {
            $response = ['status'=> 'ERROR', 'data' => 'Given function is not found!'];
        }
    } 

    echo json_encode($response);


