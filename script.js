$("img").attr("draggable","false")
$(".bg1-main").css("transform","translate(0px) scale(0.8)").css("opacity","0.8")
        setTimeout(() => {
            $(".bg1-main").css("transform","translate(0px) scale(1)").css("opacity","1")
        }, 120);
document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
    }
        }

 const active = (parameter) => {
    $('.header a').removeClass('active')
    $(parameter).addClass("active")
}

$("a[href='#info']").click(function() {
    $("html, body").animate({ scrollTop: 1400 }, "slow");
    return false;
  });