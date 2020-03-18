
var $ = jQuery;
var style ='';
// var first;
// var second;
// var timesClicked = 0;

$('.click_btn').on('click', function(e) {
  e.preventDefault();
  style = $(this).data().style;
  console.log("style",style);
  // console.log(style=="hospitalization");

});

// $("#our_calendar td").on('click', function(){
//   let clickedID=$(this).attr('id');
//   clicked.push(clickedID);
//   $(this).removeClass().addClass(style);
// });
   
   let clicked =[];



  $(function() {
  // let clicked = [];
  let redoClicked = [];
  $("#btnCancel").on('click',() => {
    if(clicked.length) {
      let lastClicked = clicked.pop();
      redoClicked.push(lastClicked);
      $(`td#${lastClicked}`).removeClass();
    }
  });
  $("#btnRedo").on('click',() => {
    if(redoClicked.length) {
      let lastClicked = redoClicked.pop();
      clicked.push(lastClicked);
      $(`td#${lastClicked}`).addClass("hospitalization");
      console.log("clicked",clicked);
    }
  });
});


// 入院のドラッグによる登録

function CalendarSelection() {
  

  const $days = $(this).find('.day');
  
  // console.log("$(days)",$days);
  
  M=Math.max($days.index(this))+1;
  
  console.log("M",M);
  
  const range = [-1, -1];

  const $daysRange = rng => {
    rng.sort((a, b) => a - b);
    return $days.slice(rng[0], rng[1] + 1);
  };

  function hoverRange(ev) {
    if (range[0] < 0 || (range[0] > -1 && range[1] > -1)) return; // Do nothing
    $days.removeClass('is-hover');
    if (ev.type === 'mouseleave') return; // Stop here, it's a mouseleave.
    $daysRange([range[0], $days.index(this)]).addClass('is-hover');
  }

  function registerRange() {
    // $days.removeClass('is-active is-hover');
    

    
  if(style=="hospitalization"){  
      
      if (range[0] > -1 && range[1] > -1) { // RESET
        range[0] = -1;
        range[1] = -1;
      }
  
      if (range[0] > -1 && range[1] < 0) { // SET END
        
        // ↓return index in $days arrays    
        range[1] = $days.index(this);
        
        // console.log("$days.index(this)",$days.index(this));
        
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
    
  else if (style=="surgery_outpatient"){
    
      let clickedID=$(this).attr('id');
      
      const surgery=[-1,-1];
      
      clicked.push(clickedID);
      $(this).removeClass().addClass(style);
      
      surgery[0]=$days.index(this);
      surgery[1]=surgery[0]+60;
      $daysRange(surgery).addClass('surgery_limit');

  }else if(style=="surgery_hospitalization"){
      let clickedID=$(this).attr('id');
      
      const surgery=[-1,-1];
      
      clicked.push(clickedID);
      $(this).removeClass().addClass(style);
      
      surgery[0]=$days.index(this);
      surgery[1]=surgery[0]+60;
      $daysRange(surgery).addClass('surgery_limit');
  }
  else{
      let clickedID=$(this).attr('id');
      clicked.push(clickedID);
      $(this).removeClass().addClass(style);
  }
  
}

  $days.on({
    click: registerRange,
    mouseenter: hoverRange,
    mouseleave: hoverRange,
  });
}
// Apply to all .calendar on page

$("#calendar").each(CalendarSelection);