var t = document.getElementById("temp").innerHTML;
var s = document.getElementById("windSpeed").innerHTML;

if (t <= 50 && s > 3) {
    var x = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    document.getElementById("windChill").innerHTML = Math.round(x);
}
else {
    document.getElementById("windChill").innerHTML = "N/A"
}