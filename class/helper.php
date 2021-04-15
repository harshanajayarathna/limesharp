<?php 
/**
 * This will provides the helper functions
 * @author Harshana <harshanajayarathna@gmail.com>
 */
class helper
{
    // check given $input is array
    public function isValidArray($input = null)
    {
        // if given input is not an array, give exception
        if(!is_array($input))
        {
            throw new Exception('Given input is not an array');
        }
        // if given input is not an array,  return true
        return true;
    }

    // repeat given $inputArray using $numberOfTimes
    public function repeat($inputArray = null, $numberOfTimes = 3)
    {
        // if given input array is empty, give exception
        if(empty($inputArray))
        {
            throw new Exception('No value to repeat');
        }

        $resultArray = [];

        for($i=0; $i < $numberOfTimes; $i++){
            foreach($inputArray AS $inputArr){
                array_push($resultArray, $inputArr);

            }
        }
        // remove empty values from array & then return array
        return array_filter( $resultArray, 'strlen' );
    }

    // Remove characters from given string 
    public function removeSpecialsChars($input, $specialChars)
    {
        return str_replace($specialChars, "", $input);
    }

    // generate next binary number
    public function nextBinaryNumber($input)
    {
        // get length of string
        $i = strlen($input);

        // convert binary string to array
        $inputArray = str_split($input, 1);

        // get the highest index of array
        $x = $i - 1;        

        // loop from right to left
        for ( $x ; $x >= 0; $x--) {
            // if 0 is found & replace with 1 then break;  
            if($inputArray[$x] == '0'){
                $inputArray[$x] = '1';
                break;
            }else{
                $inputArray[$x] = '0';
            }
            
        }

        // if given input array contain only set bits add 1 
        if ($x < 0){
            $inputArray = array_merge(array('1'), $inputArray);
        }
        
        return $inputArray;
    }
    
}