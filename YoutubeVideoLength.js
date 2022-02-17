
var secs = (start) => {
	var seconds = 0;
	var a = start.split(":");
	 if(a.length == 3){
	 	seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
	 }
	 else if(a.length == 2){
	 	seconds = (+a[0]) * 60 + (+a[1]);
	 }
	 else{
	 	seconds = (+a[0]);
	 }
	 //console.log(seconds)
	 return seconds;
}
 var toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

var a = document.querySelectorAll('ytd-thumbnail-overlay-time-status-renderer');
var t = 0;
var h = 0;
for(var i=0; i< a.length; i++){
	// h += a[i].innerText + '';
	console.log(':::', secs(a[i].innerText))
	t += secs(a[i].innerText);
}
// console.log('h::::::',h)
console.log('t::::::',t)
console.log('Final::::::',toHHMMSS(t))

