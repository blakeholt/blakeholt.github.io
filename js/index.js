// Thanks W3 Schools


/*var time;
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
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
}*/

function checkDate() {
	let day;
    let td = new Date();
    let y = td.getFullYear();
    let m = td.getMonth();
    let D = td.getDate();
    let d = td.getDay();
	
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	domEnder = function() {
		let a = td;
		if (/1/.test(parseInt((a + "").charAt(0))))
			return "th"; a = parseInt((a + "").charAt(1)); 
		return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" 
	}();
	day = weekday[d] + " " + months[m] + " " + D  + domEnder + ", " + y;

    document.getElementById('date').innerHTML = day;
}

function updateText(id) {
                if (id === "oop") {
                    display = "Object Oriented Programming: Cathy Burchill";
                } else if (id === "js") {
                    display = "Javascript Programming: Steve Monk";
                } else if (id === "ooad") {
                    display = "Object Oriented Analysis and Design: Chris London";
                } else if (id === "math") {
                    display = "Computer Math and Statistics: Cathy Burchill";
                } else if (id === "sql") {
                    display = "Introduction to SQL: Cathy Burchill";
                } else if (id === "proj") {
                    display = "Project Management: AJ Arsenault";
                }

                document.querySelector("#info").innerHTML = display;
            }
