
//Arrows

var arrowup = document.getElementById('arrow-up');
var arrowdown = document.getElementById('arrow-down');

//hide(answer)
function hide(body) {
    $(body).slideUp(0);
}
$(document).ready(function() {
    $(".card-header").click(function () {
        $(this).next().slideToggle(1000);
        
    });
    $(".header-div").click(function () {
        $("span", this).toggle("slow");
    });
});
