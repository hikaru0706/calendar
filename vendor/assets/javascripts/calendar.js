
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

let i =1;

for (let w = 0; w <= pastmonth; w++) {
    
    const contractdate= new Date(2017,11,15);
    
    const endDate = new Date(contractdate.getYear(),(contractdate.getMonth()+1)+w,0);
    
    contractdate.setMonth(contractdate.getMonth()+w);

    calendarHtml += '<tr>';

    
    
    calendarHtml += '<th class="hz-header">'+ contractdate.getFullYear()+'/'+(contractdate.getMonth()+1)+'</th>';
    dayCount = 1;
    // for (let d = 0; d < endDate.getDate(); d++) {
    for(let d=0; d<=31;d++){
      if (d<endDate.getDate()){
           i=i+1;
            calendarHtml += '<td id='+'"'+i+'"'+'class="day"'+'data-surgery-layer=0'+' data-day='+contractdate.getFullYear()+'/'+(contractdate.getMonth()+1)+'/'+(d+1)+'><div>'+ dayCount +'</div></td>';
      }
      else {calendarHtml += '<td id="null"' +'class=""'+'>' + '</td>';}
            dayCount++ ;
    }
    
    calendarHtml += '<td class="noborder"></td>';

    calendarHtml += '<td class="result"></td>';
    
    calendarHtml += '</tr>';
    
    // calendarHtml += '<tr>';
    
    // calendarHtml += '<th></th>';

        
    //       for(let d=0; d<=31;d++){
              
    //     }
        
    // for(let d=0; d<=31;d++){
    //   if (d<endDate.getDate()){

    //       calendarHtml += '<td class = hospitalization_row>' + '</td>';
    //   }
    // }    
    
        
    // calendarHtml += '</tr>';
        
      for(let e=0; e<=3;e++){

        calendarHtml += '<tr>';
        calendarHtml += '<th></th>';

        for(let d=0; d<=31;d++){
          if (d<endDate.getDate()){
            calendarHtml += '<td class =surgery_row'+e+'>' + '</td>';
          }
        }
        calendarHtml += '</tr>';
    
      }
}

calendarHtml += '</table>';

// console.log("step5",calendarHtml);

document.querySelector('#calendar').innerHTML = calendarHtml;
