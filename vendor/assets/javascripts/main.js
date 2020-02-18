
// 例えばこのようにして日時を作成。var date1 = new Date('December 17, 1995 03:24:00');

const contractdate= new Date(2017,11,15);


// console.log("contractdate",contractdate.getFullYear());

const date = new Date();

console.log("date",date);

let dayCount = 1; // 日にちのカウント
let calendarHtml = ''; // HTMLを組み立てる変数

calendarHtml += '<table id = our_calendar>';

console.log("diff",Math.floor((date-contractdate)/(1000*60*60*24*31))+1);

// 契約日からの経過月数を求める。この月数だけ表示する
pastmonth=Math.floor((date-contractdate)/(1000*60*60*24*31))+ 2


for (let w = 0; w <= pastmonth; w++) {
    
    const contractdate= new Date(2017,11,15);
    
    const endDate = new Date(contractdate.getYear(),(contractdate.getMonth()+1)+w,0);
    
    contractdate.setMonth(contractdate.getMonth()+w);

    calendarHtml += '<tr>';

    
    
    calendarHtml += '<th>'+ contractdate.getFullYear()+'/'+(contractdate.getMonth()+1)+'</th>';
    dayCount = 1;

    // for (let d = 0; d < endDate.getDate(); d++) {
    for(let d=0; d<=30;d++){
      if (d<endDate.getDate()){
            calendarHtml += '<td id='+'"'+(31*w+d+1)+'"'+' data-class-index="0"'+' data-day='+contractdate.getFullYear()+'/'+(contractdate.getMonth()+1)+'/'+(d+1)+'>' + dayCount + '</td>';
      }
      else {calendarHtml += '<td id='+'"'+(31*w+d+1)+'"'+' data-class-index="0"'+'>' + '</td>';}
            dayCount++ ;
        
    }
    calendarHtml += '</tr>';
}

calendarHtml += '</table>';

console.log("step5",calendarHtml);

document.querySelector('#calendar').innerHTML = calendarHtml;

// var color = 'black';

// $('.click_btn').on('click', function(e) {
//   e.preventDefault();
//   color = $(this).css('color');
// }) ;

// $('.click_td').on('click', function(e) {
//   e.preventDefault();
//   $(this).css('color', color);
// });

$(function () {
      var first;
      var second;


        
      $("#our_calendar td").on("contextmenu", function(e) {
        e.preventDefault();
        $(this).removeAttr('class');
        }).click(function() {
          
          surgery_day=new Date($(this).data('day'))
          console.log("surgery_day",surgery_day);
          
          surgery_limit=new Date(surgery_day.setDate(surgery_day.getDate()+60))
          console.log("surgery_limit",surgery_limit);
          
          surgery_limit_day=surgery_limit.getFullYear()+'/'+(surgery_limit.getMonth()+1)+'/'+surgery_limit.getDate()
          console.log("surgery_limit_day",surgery_limit_day);

          var surgery_limit_id = document.querySelector(`td[data-day= "${surgery_limit_day}"]`).id;
        
        console.log("surgery_limit_day",surgery_limit_id);        
       
      // console.log('background',$(this).css('background-color'))
      // $(this).addClass('outpatient')
       
       var classArray = ['other_outpatient','outpatient','surgery_outpatient','surgery_hospitalization'];
        var arrLen = classArray.length;

        var classIndex = $(this).data('class-index');
        console.log('data-class-index',classIndex);
        // console.log('arrLen',arrLen);

       $(this).removeClass(classArray[classIndex]);
       if(classIndex < (arrLen-1)) {
         classIndex++;
       }  else {
         //reset class index
         classIndex = 0;
       }
       $(this).addClass(classArray[classIndex]);
       $(this).data('class-index',classIndex);
      });
      


      $("#our_calendar td")
          .mousedown(function () {
            
          first = this.id;
          
          firstday=new Date($(this).data('day'))
          
          console.log("firstday",firstday);
          
          underlimit=new Date(firstday.setDate(firstday.getDate()-60))
          
          underdate=underlimit.getFullYear()+'/'+(underlimit.getMonth()+1)+'/'+underlimit.getDate()
          
          console.log("underdate",underdate);
          
          
          // console.log("underid",underid);
          
          return false; // prevent text selection
        })
        .mouseup(function () {
          second = this.id;
         
          endday=new Date($(this).data('day'))
          
          console.log("endday",endday);
          
          upperlimit=new Date(endday.setDate(endday.getDate()+120))
          
          console.log("upperlimit",upperlimit);
          
          upperdate=upperlimit.getFullYear()+'/'+(upperlimit.getMonth()+1)+'/'+upperlimit.getDate()
          
          console.log("upperdate",upperdate);

          var upperid = document.querySelector(`td[data-day= "${upperdate}"]`).id;
         
          var underid = document.querySelector(`td[data-day= "${underdate}"]`).id;


        console.log("underid",underid);
         console.log("upperid",upperid);      
         console.log("first",first);
         console.log("second",second);
          
          if(first==second){
            classchanger(first,null);
          }
          else if(first<second){
                
                console.log("eventfired");
                
               for(var j=underid;j<=upperid;j++){
                //  console.log("hospitalizationlimit_fired",j);
               classchanger(j,'hospitalization_limit');}  
              
              // for(var k=second;k<=second+120;k++){
              // classchanger(k,'hospitalization_limit');}               
              
              for (var i=first;i<=second; i++){
                  console.log("hospitalization_fired");
                classchanger(i,'hospitalization');}
          }
          else{
              for (var i=second;i<=first; i++)
                classchanger(i,'hospitalization');}   
          return false;
          
          
        });
        
        
        
    });
    
// console.log("test",second);  

      function classchanger(id,color){
  // $("#"+id).removeAttr("class")     
  $("#"+id).addClass(color);}
  


 $("button").click(function(){
    $("#our_calendar td").each(function(){
      // $(this).css("background-color","rgba(0, 0, 0, 0)");
      $(this).removeAttr("class")     
      first = null;
      second = null;
    });
  });

