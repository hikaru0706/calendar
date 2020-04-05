
var $ = jQuery;
var style ='';

const layerArray=["surgery_limit","surgery_limit2","surgery_limit3","surgery_limit4","surgery_limit5","surgery_limit6"];

const range = [-1, -1];

const $days = $("#calendar .day");


const $daysRange = rng => {
  rng.sort((a, b) => a - b);
return $days.slice(rng[0], rng[1] + 1);   
  };

  M=Math.max($days.index(this))+1;

  let clicked =[];

  $('.click_btn').on('click', function(e) {
  e.preventDefault();
  style = $(this).data().style;
  $('.erase').removeClass('erase-clicked');
});

  $('.erase').click(function(){
  $(this).addClass('erase-clicked');
});

  function erase(){
    
  }

  function hospitalization(){
  if (range[0] > -1 && range[1] > -1) { // RESET
        range[0] = -1;
        range[1] = -1;
      }
  
      if (range[0] > -1 && range[1] < 0) { // SET END
        
        // ↓return index in $days arrays    
        range[1] = $days.index(this);
        
        $daysRange(range).addClass('is-active');
        
        range[0]=Math.max(range[0]-60,0);
        range[1]=range[1]+120;
        
        $daysRange(range).addClass('hospitalization_limit');
      }
  
      if (range[0] < 0 && range[1] < 0) { // SET START
        range[0] = $days.index(this);
        $daysRange([range[0], range[0]]).addClass('is-active');
      }
    
}
  
  function surgery(){
      
      let clickedID=$(this).attr('id');

      var arrLen=layerArray.length;     

      clicked.push(clickedID);
      $(this).children().toggleClass(style);
      
      let index = $(".day").index(this);
      let layerChange = $(this).children().hasClass('surgery') ? 1 : -1;

      $(".day").slice(index + 1, index + 120).each(function() {
        
        var classIndex = $(this).data('surgery-layer');
        
          classIndex += layerChange;
          
         if (layerChange === 1 && classIndex - 1 < arrLen) {
        $(this).addClass(layerArray[classIndex - 1]);
        } else if (layerChange === -1 && classIndex >= 0) {
          
        $(this).removeClass(layerArray[classIndex]);
         }

      $(this).data('surgery-layer', classIndex);

    	});  
}

  function hoverRange(ev) {
    if (range[0] < 0 || (range[0] > -1 && range[1] > -1)) return; // Do nothing
    $days.removeClass('is-hover');
    if (ev.type === 'mouseleave') return; // Stop here, it's a mouseleave.
    $daysRange([range[0], $days.index(this)]).addClass('is-hover');
  }

  function registerRange() {

  if($('.erase').hasClass('erase-clicked')){
    $(this).children().removeClass();
  }

  else if(style=="hospitalization"){  
      
      hospitalization.call(this);
    }
    
  else if(style=="surgery"){
    surgery.call(this);
  }
  
  else{
      let clickedID=$(this).attr('id');
      clicked.push(clickedID);
      $(this).children().toggleClass(style);
      $(this).siblings('.noborder').next().text( $(this).parent().find('.outpatients').length );
  }
}

$("#calendar .day").on({
    click: registerRange,
    mouseenter: hoverRange,
    mouseleave: hoverRange,
  });