$(document).ready(function() {

    $("a[href*=#]").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
   
   
   new Twitch.Embed("twitch-embed", {
        width: 854,
        height: 480,
        channel: "monstercat",
        // Only needed if this page is going to be embedded on other websites
      });
   
// document ready  