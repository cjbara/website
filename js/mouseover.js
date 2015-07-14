
$(document).ready(function() {
       //This function makes the greyed out logos fade when hovered over
       $('.connect-button').hover(
       function(){ 
                     $(this).css({
                            '-webkit-filter': 'grayscale(0%)',
                            'height': '95px'
                     });

                     var id = $(this).attr('id');
                     console.log('#'+id+'.text');

                     $('#'+id+'.text').css({
                            'display': 'block'
                     });
              }, function(){ 
                     $(this).css({
                            '-webkit-filter': 'grayscale(100%)',
                            'height': '75px'
                     });

                     var id = $(this).attr('id');
                     console.log('#'+id+'.text');

                     $('#'+id+'.text').css({
                            'display': 'none'
                     });
              }
       );
});