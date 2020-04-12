
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
    if($(this).children().hasClass('surgery')){
        
        $(this).children().removeClass();

        let index = $(".day").index(this);
          $(".day").slice(index + 1, index + 120).each(function() {
          var classIndex = $(this).data('surgery-layer');
          
          classIndex += -1;
            
          $(this).removeClass(layerArray[classIndex]);
          $(this).data('surgery-layer', classIndex);
          });
    }
    $(this).children().removeClass();
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
        
        $("td.day").slice(range[0],range[1]).addClass('hospitalization_limit');
      }
  
      if (range[0] < 0 && range[1] < 0) { // SET START
        range[0] = $days.index(this);
        $daysRange([range[0], range[0]]).addClass('is-active');
      }
    
}
  
//   function surgery(){
      
//       let clickedID=$(this).attr('id');

//       var arrLen=layerArray.length;     

//       clicked.push(clickedID);
//       $(this).children().toggleClass(style);
      
//       let index = $(".day").index(this);
//       let layerChange = $(this).children().hasClass('surgery') ? 1 : -1;

//       $(".day").slice(index + 1, index + 120).each(function() {
        
//         var classIndex = $(this).data('surgery-layer');
        
//           classIndex += layerChange;
          
//         if (layerChange === 1 && classIndex - 1 < arrLen) {
//         $(this).addClass(layerArray[classIndex - 1]);
//         } else if (layerChange === -1 && classIndex >= 0) {
          
//         $(this).removeClass(layerArray[classIndex]);
//         }



//       $(this).data('surgery-layer', classIndex);

//     	});  
    	
// }
  
  function surgery2(){

      let index = $(".day").index(this);
      $(this).children().toggleClass(style);
      
      let a0=$("tr .surgery_row0").eq(index).hasClass("surgery_limit");
      let b0=$("tr .surgery_row0").eq(index+120).hasClass("surgery_limit");
      let a1=$("tr .surgery_row1").eq(index).hasClass("surgery_limit1");
      let b1=$("tr .surgery_row1").eq(index+120).hasClass("surgery_limit1");
      let a2=$("tr .surgery_row2").eq(index).hasClass("surgery_limit2");
      let b2=$("tr .surgery_row2").eq(index+120).hasClass("surgery_limit2");
      let a3=$("tr .surgery_row3").eq(index).hasClass("surgery_limit3");
      let b3=$("tr .surgery_row4").eq(index+120).hasClass("surgery_limit3");
      let a4=$("tr .surgery_row3").eq(index).hasClass("surgery_limit4");
      let b4=$("tr .surgery_row4").eq(index+120).hasClass("surgery_limit4");     
      
      // console.log("0",!(a0||b0));
      // console.log("1",!(a1||b1));
      // console.log("2",!(a2||b2));
      // console.log("3",!(a3||b3));

      
      if(!(a0||b0)){
        $(this).toggleClass("surgery_limit");
        $("tr .surgery_row0").slice(index+1,index+120).each(function() {
        $(this).toggleClass("surgery_limit");
        });
      }
      else if(!(a1||b1)){
        // console.log("#");
        $(this).toggleClass("surgery_limit1");
        $("tr .surgery_row1").slice(index+1,index+120).each(function() {
        $(this).toggleClass("surgery_limit1").parent().toggle();
        });
      }
      else if(!(a2||b2)){
        $(this).toggleClass("surgery_limit2");
        $("tr .surgery_row2").slice(index+1,index+120).each(function() {
        $(this).toggleClass("surgery_limit2").parent().toggle();
        });
      }
      else if(!(a3||b3)){
        $(this).toggleClass("surgery_limit3");
        $("tr .surgery_row3").slice(index+1,index+120).each(function() {
        $(this).toggleClass("surgery_limit3").parent().toggle();
        });
      }
      else if(!(a4||b4)){
        $(this).toggleClass("surgery_limit4");
        $("tr .surgery_row4").slice(index+1,index+120).each(function() {
        $(this).toggleClass("surgery_limit4").parent().toggle();
        });
      }
      
      // console.log(a0|b0);
      
      //   $("tr .surgery_row0").slice(index+1,index+120).each(function() {
      //   $(this).addClass("surgery_limit");
      //   });
      
  }

  function hoverRange(ev) {
    if (range[0] < 0 || (range[0] > -1 && range[1] > -1)) return; // Do nothing
    $days.removeClass('is-hover');
    if (ev.type === 'mouseleave') return; // Stop here, it's a mouseleave.
    $daysRange([range[0], $days.index(this)]).addClass('is-hover');
  }

  function registerRange() {

  if($('.erase').hasClass('erase-clicked')){
    erase.call(this);
  }

  else if(style=="hospitalization"){  
      
      hospitalization.call(this);
    }
    
  else if(style=="surgery"){
    surgery2.call(this);
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