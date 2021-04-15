// repeat given comma separated vvalues
function repeatTask()
{        
        $.ajax({
            type: "POST",
            url: 'main.php',
            dataType: 'json',
            data: {functionName: "repeatTask", input: $('#repeat').val()},        
            success: function (res) {
                showResults(res, 'repeat');
            }
        });
}


// reformat given input
function reformatTask()
{
    $.ajax({
        type: "POST",
        url: 'main.php',
        dataType: 'json',
        data: {functionName: "reformatTask", input: $('#reformat').val()},
        success: function (res) {
            showResults(res, 'reformat');
        }
    });
}

// generate next binary number
function nextBinaryNumberTask()
{
    $.ajax({
        type: "POST",
        url: 'main.php',
        dataType: 'json',
        data: {functionName: "nextBinaryNumberTask", input: $('#binary').val()},        
        success: function (res) {
           showResults(res, 'binary');
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