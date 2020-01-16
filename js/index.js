// Thanks W3 Schools

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var time;
    if (h > 12) {
        time = (h - 12) + ":" + m + ":" + s + " PM";
    } else {
        time = h + ":" + m + ":" + s + " AM";
    }

    document.getElementById('time').innerHTML = time;
    
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function checkDate() {
    var td = new Date();
    var y = td.getFullYear();
    var m = td.getMonth();
    var D = td.getDate();
    var d = td.getDay();
    
    var day;
    if(d == 0){
       day = "Sunday, ";
    }else if(d == 1){
       day = "Monday, ";
    }else if(d == 2){
       day = "Tuesday, ";
    }else if(d == 3){
       day = "Wednesday, ";
    }else if(d == 4){
       day = "Thursday, ";
    }else if(d == 5){
       day = "Friday, ";
    }else if(d == 6){
       day = "Saturday, ";
    }
    
    if(m == 0){
       day += "January ";
    }else if(m == 1){
       day += "February ";
    }else if(m == 2){
       day += "March ";
    }else if(m == 3){
       day += "April ";
    }else if(m == 4){
       day += "May";
    }else if(m == 5){
       day += "June ";
    }else if(m == 6){
       day += "July ";
    }else if(m == 7){
       day += "August ";
    }else if(m == 8){
       day += "September ";
    }else if(m == 9){
       day += "October ";
    }else if(m == 10){
       day += "November ";
    }else if(m == 11){
       day += "December ";
    }
    
    day += (D);
    
    if(day.endsWith("1") && !day.endsWith("11")){
       day += "st";
    }else if(day.endsWith("2")){
       day += "nd";
    }else if(day.endsWith("3")){
       day += "rd";
    }else{
        day += "th";
    }
    document.getElementById('date').innerHTML = day;
}
