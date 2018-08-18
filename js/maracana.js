$(document).ready(function() {
    $('#example').DataTable({
        "aLengthMenu": [
            [12, 2, -1],
            [1, 2, "All"]
        ]
    });
} );


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


    $(function() {
    // Affichage du sous menu en douceur
    jQuery('ul.nav li.dropdown').hover(function() {
    jQuery(this).find('.jqueryFadeIn').stop(true, true).delay(200).fadeIn();
    }, function() {
    jQuery(this).find('.jqueryFadeIn').stop(true, true).delay(200).fadeOut();
    });

    });     

function afficher_video(id){
        
        jQuery('#video1').css({"display":"none"});
        jQuery('#video2').css({"display":"none"});
        jQuery('#video3').css({"display":"none"});
        jQuery('#video4').css({"display":"none"});
        jQuery('#'+id).css({"display":"block "});       
  }

function afficher_top(id,id2,id3){
        jQuery('#top1').css({"background-color":"#4D4D4F"});
        jQuery('#top2').css({"background-color":"#4D4D4F"});
        jQuery('#top3').css({"background-color":"#4D4D4F"});
        jQuery('#atop1').css({"color":"#fff"});
        jQuery('#atop2').css({"color":"#fff"});
        jQuery('#atop3').css({"color":"#fff"});
        jQuery('#lu').css({"display":"none"});
        jQuery('#comment').css({"display":"none"});
        jQuery('#partage').css({"display":"none"});

        jQuery('#'+id).css({"background-color":"#EDEDED"});
        jQuery('#'+id2).css({"color":"#4D4D4F"});
        jQuery('#'+id3).css({"display":"block "});      
}

function afficher_class(){
    Objectifs = jQuery('#classement').val();
    jQuery('#ligue1').css({"display":"none"});
    jQuery('#ligue2').css({"display":"none"});
    jQuery('#'+Objectifs).css({"display":"block"});

}

function classement(id,id2,id3){
        Objectifs = jQuery('#classement').val();
        jQuery('#'+Objectifs+'tab_class1').css({"display":"none"});
        jQuery('#'+Objectifs+'tab_class2').css({"display":"none"});
        jQuery('#'+Objectifs+'tab_class3').css({"display":"none"});
        jQuery('#'+Objectifs+'class1').css({"background-color":"#333132"});
        jQuery('#'+Objectifs+'class2').css({"background-color":"#333132"});
        jQuery('#'+Objectifs+'class3').css({"background-color":"#333132"});
        jQuery('#'+Objectifs+'aclass1').css({"color":"#FDFDFD"});
        jQuery('#'+Objectifs+'aclass2').css({"color":"#FDFDFD"});
        jQuery('#'+Objectifs+'aclass3').css({"color":"#FDFDFD"});

        jQuery('#'+id).css({"display":"block "}); 
        jQuery('#'+id2).css({"background-color":"#FDFDFD"});
        jQuery('#'+id3).css({"color":"#333132"});

          

}

// Sliding images

var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex> slides.length) {slideIndex = 1}
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 4000); // Change image every 4 seconds
        }
