$( document ).ready(function() {
  $('span').removeClass('highlighted');

  $('video').mediaelementplayer({
    features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen' ]
  });

  const vid = document.querySelector("video");

  vid.ontimeupdate = function() {
    let datacap = checkCaption(vid.getCurrentTime());
    $('span').removeClass('highlighted');
    if (datacap>0){
      $(`span[data-cap='${datacap}']`).each(function(){
        $(this).addClass('highlighted');
      })
    }
  };

  $('span').click(function(){
    let capclicked = clickCaption( $(this).data('cap') );
    vid.setCurrentTime(capclicked);
  });

});

function clickCaption(datacap){
  if (datacap==1){return 0.240;}
  if (datacap==2){return 4.13;}
  if (datacap==3){return 7.535;}
  if (datacap==4){return 11.27;}
  if (datacap==5){return 13.96;}
  if (datacap==6){return 17.94;}
  if (datacap==7){return 22.37;}
  if (datacap==8){return 26.88;}
  if (datacap==9){return 32.2;}
  if (datacap==10){return 34.73;}
  if (datacap==11){return 39.43;}
  if (datacap==12){return 41.19;}
  if (datacap==13){return 46.3;}
  if (datacap==14){return 49.27;}
  if (datacap==15){return 53.76;}
  if (datacap==16){return 57.78;}
}


function checkCaption(time){
  if (time > 0.240 && time <= 4.130){return 1;}
  if (time > 4.130 && time <= 7.535){return 2;}
  if (time > 7.535 && time <= 11.27){return 3;}
  if (time > 11.27 && time <= 13.96){return 4;}
  if (time > 13.96 && time <= 17.94){return 5;}
  if (time > 17.94 && time <= 22.37){return 6;}
  if (time > 22.37 && time <= 26.80){return 7;}
  if (time > 26.88 && time <= 32.1){return 8;}
  if (time > 32.2 && time <= 34.73){return 9;}
  if (time > 34.73 && time <= 39.43){return 10;}
  if (time > 39.43 && time <= 41.19){return 11;}
  if (time > 41.19 && time <= 46.3){return 12;}
  if (time > 46.3 && time <= 49.27){return 13;}
  if (time > 49.27 && time <= 53.76){return 14;}
  if (time > 53.76 && time <= 57.78){return 15;}
  if (time > 57.78 && time <= 60.15){return 16;}
  return 0;
}
