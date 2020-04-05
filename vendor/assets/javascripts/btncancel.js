let clicked =[];
var $ = jQuery;

const classArray=["surgery_limit","surgery_limit2","surgery_limit3"
      ,"surgery_limit4","surgery_limit5","surgery_limit6"];


$(function() {

let redoClicked = [];

const $days = $(this).find('.day');


  $("#btnCancel").on('click',() => {
    if(clicked.length) {
      let lastClicked = clicked.pop();
      redoClicked.push(lastClicked);
      
      console.log($(`td#${lastClicked} div`).hasClass("surgery"));
      
      if($(`td#${lastClicked} div`).hasClass("surgery")){
      
      const surgery=[-1,-1];
        
      surgery[0]=$days.index(this)+1;
      surgery[1]=surgery[0]+60;
        
       $days.slice(surgery[0],surgery[1]+1).each(function() {
        
        var classIndex = $(this).data('surgery-layer');
        
        --classIndex;
        
        console.log("classIndex",classIndex);
        
        console.log("$(this)",$(this));
        
        $(this).removeClass().addClass(classArray[classIndex-1]);
        
        $(this).data('surgery-layer',classIndex);
    	});  
      }
    $(`td#${lastClicked} div`).removeClass();
    }
  });
  
  
  $("#btnRedo").on('click',() => {
    if(redoClicked.length) {
      let lastClicked = redoClicked.pop();
      clicked.push(lastClicked);
      $(`td#${lastClicked} div`).addClass("hospitalization");
      console.log("clicked",clicked);
    }
  });
});