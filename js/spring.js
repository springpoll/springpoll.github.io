/*! spring.js v1.00.00 | (c) 2016 unbios.com */

'use strict';

/* 
static persitent global vars * global functions 
server side events functions
client side events functions
*/

/*! jsTimezoneDetect - v1.0.5 - 2013-04-01 */
window.jstz=function(){var b=function(a){a=-a.getTimezoneOffset();return null!==a?a:0},c=function(){return b(new Date(2010,0,1,0,0,0,0))},f=function(){return b(new Date(2010,5,1,0,0,0,0))},e=function(){var a=c(),d=f(),b=c()-f();return new jstz.TimeZone(jstz.olson.timezones[0>b?a+",1":0<b?d+",1,s":a+",0"])};return{determine_timezone:function(){"undefined"!==typeof console&&console.log("jstz.determine_timezone() is deprecated and will be removed in an upcoming version. Please use jstz.determine() instead.");
return e()},determine:e,date_is_dst:function(a){var d=5<a.getMonth()?f():c(),a=b(a);return 0!==d-a}}}();jstz.TimeZone=function(b){var c=null,c=b;"undefined"!==typeof jstz.olson.ambiguity_list[c]&&function(){for(var b=jstz.olson.ambiguity_list[c],e=b.length,a=0,d=b[0];a<e;a+=1)if(d=b[a],jstz.date_is_dst(jstz.olson.dst_start_dates[d])){c=d;break}}();return{name:function(){return c}}};jstz.olson={};
jstz.olson.timezones={"-720,0":"Etc/GMT+12","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax",
"-240,0":"America/Santo_Domingo","-240,1,s":"America/Asuncion","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"Etc/GMT+2","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"Etc/UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,1":"Europe/Moscow","180,0":"Asia/Baghdad",
"210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Yerevan","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide",
"600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"};
jstz.olson.dst_start_dates={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"Atlantic/Stanley":new Date(2011,8,4,7,0,0,0),"America/Asuncion":new Date(2011,9,2,3,0,0,0),"America/Santiago":new Date(2011,9,9,3,0,0,0),"America/Campo_Grande":new Date(2011,9,16,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,
2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2011,2,13,2,0,0,0),"America/New_York":new Date(2011,2,13,7,0,0,0),"Asia/Gaza":new Date(2011,2,26,23,0,0,0),"Asia/Beirut":new Date(2011,2,27,1,0,0,0),"Europe/Minsk":new Date(2011,2,27,2,0,0,0),"Europe/Helsinki":new Date(2011,2,27,4,0,0,0),"Europe/Istanbul":new Date(2011,2,28,5,0,0,0),"Asia/Damascus":new Date(2011,3,1,2,0,0,0),"Asia/Jerusalem":new Date(2011,3,1,6,0,0,0),"Africa/Cairo":new Date(2010,3,30,4,0,0,
0),"Asia/Yerevan":new Date(2011,2,27,4,0,0,0),"Asia/Baku":new Date(2011,2,27,8,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"Pacific/Fiji":new Date(2010,11,29,23,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0)};
jstz.olson.ambiguity_list={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Asuncion":["Atlantic/Stanley","America/Asuncion","America/Santiago","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":"Asia/Gaza Asia/Beirut Europe/Minsk Europe/Helsinki Europe/Istanbul Asia/Damascus Asia/Jerusalem Africa/Cairo".split(" "),"Asia/Yerevan":["Asia/Yerevan","Asia/Baku"],"Pacific/Auckland":["Pacific/Auckland",
"Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"]};
  
window.isbrowser = {Useragent: function() {return navigator.userAgent;},Any: function() {return (isbrowser.Useragent() );}}
window.isplatform = {
    Android: function() {return navigator.userAgent.match(/Android/i) ? 'Android' : false;},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i) ? 'BlackBerry' : false;},
    iPhone: function() {return navigator.userAgent.match(/iPhone/i) ? 'iPhone' : false;},
    iPad: function() {return navigator.userAgent.match(/iPad/i) ? 'iPad' : false;},
    iPod: function() {return navigator.userAgent.match(/iPod/i) ? 'iPod' : false;},
    IEMobile: function() {return navigator.userAgent.match(/IEMobile/i) ? 'IEMobile' : false;},
    OS: function() {return navigator.platform;},
    Any: function() {return (isplatform.Android() || isplatform.BlackBerry() || isplatform.iPhone() || isplatform.iPad() || isplatform.iPod() || isplatform.IEMobile() || isplatform.OS() );}};

window.clrtmr = 0;

/* client side events * functions */

 // window.location.hash='http://www.saastr.com/the-official-saastr-podcast-029-andy-wilson-founder-ceo-logickull-discusses-what-its-like-to-have-jason-lemkin-as-your-investor/';
 // http://springpoll.apc/#01#http://www.saastr.com/the-official-saastr-podcast-029-andy-wilson-founder-ceo-logickull-discusses-what-its-like-to-have-jason-lemkin-as-your-investor/
 // console.log( window.location.hash.substring(0) );
 // console.log( window.location.hash.substring(0).toString().slice(0, 4) );
 // if (  window.location.hash.substring(0).toString().slice(0, 4) === '#01#' ) { alert('wank');}

 function checkurlvalue() {

  switch (true) {

    case ( window.location.hash.substring(0).toString().slice(0, 4) === '#03#' ):
         set_html_id('cta_message','Organic Growth + User Acquisitions &nbsp; <br> Lets Connect ... ');
         set_html_id('cta_message_mob','Organic Growth + User Acquisitions ... simple');
         set_html_id('cta_message_sml_mob','Growth + User Acquisitions ...');

         set_css_id('springpoll-msg','display','block');
         document.getElementById("springpoll-msg-color").style.backgroundColor = "#1A1A1A";
         document.getElementById("msg-right-btn").setAttribute("href", 'https://uk.linkedin.com/in/mrglynthomas?click_source=springpoll');
         document.getElementById("springpoll-A").setAttribute("href", 'https://twitter.com/intent/follow?screen_name=mrglynthomas');
         document.getElementById("springpoll-img").setAttribute("src", '/img/glynavatar_300x300.png');
         runurl();
    break;

    case ( window.location.hash.substring(0).toString().slice(0, 4) === '#02#' ):
         set_html_id('cta_message','SupportSaint the on demand I.T. service, book on-line, send us an email or call if you prefer ...');
         set_html_id('cta_message_mob','SupportSaint I.T. services in your home ... call now');
         set_html_id('cta_message_sml_mob','SupportSaint I.T. on demand ...');

         set_css_id('springpoll-msg','display','block');
         document.getElementById("springpoll-msg-color").style.backgroundColor = "#2d3e58";
         document.getElementById("msg-right-btn").setAttribute("href", 'http://supportsaint.com?click_source=springpoll');
         document.getElementById("springpoll-A").setAttribute("href", 'https://twitter.com/intent/follow?screen_name=supportsaint');
         document.getElementById("springpoll-img").setAttribute("src", '/img/supportsaint_300x300.png');
         runurl();
    break;

    case ( window.location.hash.substring(0).toString().slice(0, 4) === '#01#' ):
    case ( window.location.hash.substring(4) !== undefined ):
           runurl();
    break;

    default: // load default page and default message
             // console.log('default web page!');
           runurl();
    break;

   }
 }

function runurl() {
 
 if ( validateurl(window.location.hash.substring(4)) ) {

      document.getElementById("springpoll-iframe").setAttribute("src", window.location.hash.substring(4));
      document.getElementById("springpoll-iframe").setAttribute("name", 'springpoll-iframe-' + Date.now());
      set_css_id('springpoll-msg','display','block');

      // var uriarr = window.location.href.split('/');
      // console.log(uriarr[0] + '/'+ uriarr[1] +'/'+ uriarr[2] +'/'+ uriarr[3]);
      // var backlen = -1;history.go(-backlen);window.history.replaceState( '', 'BusyRocket', uriarr[0] + '/'+ uriarr[1] +'/'+ uriarr[2] ); uriarr = null; backlen = null;

  } else {
      // load default page and default message 
      // console.log('default web page!');
      set_css_id('springpoll-iframe','display','none');
      set_css_id('springpoll-page','display','block');
      set_css_id('springpoll-msg','display','block');
  }
}


// console.log( window.location.hash.substring(4) );

window.onload = function() {

  try {

   checkurlvalue();

  } catch(er) {}

   // document.getElementById("springpoll-iframe").setAttribute("src", window.location.hash.substring(4));
  
  }

window.document.addEventListener("DOMContentLoaded", function(event) {
  
try {

  clrtmr = setTimeout(function(){
   
    // alert('doc loaded * size :' + document.getElementsByTagName('HTML')[0].outerHTML.length); 
    // alert(document.getElementsByTagName('HTML')[0].innerHTML.length);

      switch (true) {

        case ( (document.getElementsByTagName('HTML')[0].innerHTML.length) === 2850):
        case ( (document.getElementsByTagName('HTML')[0].innerHTML.length) === 3833):
              // console.log('default : url');
              clearTimeout(clrtmr);
        break;
        case ( (document.getElementsByTagName('HTML')[0].innerHTML.length) === 3968):
              // console.log('error : url not exist');
              clearTimeout(clrtmr);
              window.location = window.location.href.replace(location.hash,"");
        break;
        case ( (document.getElementsByTagName('HTML')[0].innerHTML.length) === 3918):
        case ( (document.getElementsByTagName('HTML')[0].innerHTML.length) === 4039):
        case ( (document.getElementsByTagName('HTML')[0].innerHTML.length) === 4168):
              // console.log('error : url * iframe not allowed * iframe content blocked ');
              clearTimeout(clrtmr);
              window.location = window.location.hash.substring(4);
        break;

        default:
              document.body.style.backgroundImage='none';
        break;

      }
      
      // console.log("DOM fully loaded and parsed");

      }, 3000);

    } catch(er) {}

  });


// window.document.getElementsByTagName("BODY")[0].onresize = function() {rewindow()};


function validateurl(textval) {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}

function rewindow() {
  
  var scrollWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  //console.log(scrollWidth);

  if (scrollWidth <= 600) {
      console.log('hello!');
      clear_css_class('springpoll-msg-color', 'springpoll01'); 

  } else {
      clear_css_class('springpoll-msg-color', 'springpoll01');
      add_css_class('springpoll-msg-color', 'image'); 
  }

}
   


