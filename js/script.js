/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "windows";
    }

    if (/android/i.test(userAgent)) {
        return "android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }

    return "unknown";
}

var os = getMobileOperatingSystem();
if (os === "android") {
    $('.fb').attr("href","fb://group/162046437768451");
    $('.ig').attr("href","https://www.instagram.com/texasthetatau/");
    $('.tt').attr("href","https://twitter.com/TexasThetaTau");
}else if (os === "ios") {
    $('.fb').attr("href","fb://group/162046437768451");
    $('.ig').attr("href","https://www.instagram.com/texasthetatau/");
    $('.tt').attr("href","https://twitter.com/TexasThetaTau");
} else {
    $('.fb').attr("href","https://www.facebook.com/groups/ThetaTauSpringRush2018/");
    $('.ig').attr("href","https://www.instagram.com/texasthetatau/");
    $('.tt').attr("href","https://twitter.com/TexasThetaTau");
}
