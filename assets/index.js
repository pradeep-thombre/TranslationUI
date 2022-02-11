// creating map to store data locally
isError=false;
$('#anim').hide();

// function to fetch all data and load to table
$("#translate").click(function () {
    
    // Showing loading animation 
    $('#anim').show();

    // fetching values of select and source text boc 
    var text=$("#sourcetext").val();
    var lang=$("#lang").val();

    // sourct text is empty returning 
    if(text.length==0){
        return;
    }

    
    // fetches data from api 
    $.get("https://ninja-translation-caching.herokuapp.com/translate?text="+text+"&lang="+lang, function (data) {
        
        // settiong data in target box 
        $("#targettext").html(data.data.result);
        $("#sourceLang").html("Translated from "+data.data.language.toUpperCase());

        // hiding loading animation 
        $('#anim').hide();

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
    });

});

// preventing form default action to avoid reload 
$("#form").submit(function(e) {
    e.preventDefault();
});


// Hiding after clocking on img 
$('#anim').click(function(){
    $('#anim').hide();
})