var counter = 0;

function widthFlex()
{
    if(counter % 2 == 0)
    {
        $( ".option" ).css("border-right", "none");
        $( ".option-box" ).css("width", "63%");
    }
    else
    {
        $( ".option" ).css("border-right", "1px solid black");
        $( ".option-box" ).css("width", "fit-content");
    }
    counter++;
}

$(function()
{
    $( "a[id='Exp'], #ex" ).on("click", function()
    {
        $( "div[class='option res'], div[class='option about']" ).toggle("slow");
        $( "div[class='exDesc']").toggle("slow");
        $( "body" ).toggleClass( "body-desc-toggle" );
    });

    $( "a[id='Abt'], #abt" ).on("click", function()
    {
        $( "div[class='option res'], div[class='option ex']" ).toggle("slow");
        $( "div[class='abtDesc']").toggle("slow");
        $( "body" ).toggleClass( "body-desc-toggle" );
    });
});
