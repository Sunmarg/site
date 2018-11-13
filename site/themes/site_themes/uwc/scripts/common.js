var month=new Array(12);month[0]="January";month[1]="February";month[2]="March";month[3]="April";month[4]="May";month[5]="June";month[6]="July";month[7]="August";month[8]="September";month[9]="October";month[10]="November";month[11]="December";function zeroPad(num,size){var s=num+"";while(s.length<size)s="0"+s;return s;}
function sortByPubDate(a,b){a=new Date(a.pubDate);b=new Date(b.pubDate);return a>b?-1:a<b?1:0;}
function ordinal(date){if(date>20||date<10){switch(date){case 1:return "st";case 2:return "nd";case 3:return "rd";}}
return "th";}