// repeat given comma separated values
function repeatTask()
{
    const inputValue    = $('#repeat').val();
    const functionName  = 'repeatTask';
    const id            = 'repeat';

    proceedTask(functionName, inputValue, id);
}


// reformat given input
function reformatTask()
{
    const inputValue    = $('#reformat').val();
    const functionName  = 'reformatTask';
    const id            = 'reformat';

    proceedTask(functionName, inputValue, id);
}

// generate next binary number
function nextBinaryNumberTask()
{
    const inputValue    = $('#binary').val();
    const functionName  = 'nextBinaryNumberTask';
    const id            = 'binary';

    proceedTask(functionName, inputValue, id);
}

// call php function
function proceedTask(functionName, inputValue, id)
{
    $.ajax({
        type: "POST",
        url: 'main.php',
        dataType: 'json',
        data: {functionName: functionName, input: inputValue},
        success: function (res) {
           showResults(res, id);
        }
    });
}


// show results
function showResults(res, id)
{
    if(res.status === 'SUCCESS'){
        $('.message').removeClass( "error" ).addClass( "success" );
        // $('#output_repeat').addClass( "success" )
        $('#output_'+id).html(JSON.stringify(res.data));
    }else {  
        $('.message').removeClass( "success" ).addClass( "error" );                 
        $('#output_'+id).html(JSON.stringify(res.data));
    }
    // display results on browser console
   console.log(res.data);

}

// prevent illegal character entering
function isValid(event, validChar)
{
    const pattern = new RegExp("^["+validChar+"]+$");
    const inputText =  String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if(pattern.test(inputText)){
        return true;
    }
    event.preventDefault();
    return false;
}

// perform functions when document is ready
$( document ).ready(function() {
    
    $(document).on('copy paste', function(event){
        alert('Sorry!, copy & paste are disabled in this window!')
        event.preventDefault();
        return false;
    });
    
    repeatTask();
    reformatTask();
    nextBinaryNumberTask();

});