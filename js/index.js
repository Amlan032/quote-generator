var cq="";
var ca="";
var tw="";
function qgen(){
  $.ajax({
    headers: {
      'X-Mashape-Key': 'f45xKKHPyHmshpUZchahFOWzEF2wp1LQIzZjsn0mtDPuihCkLP' ,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url:'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
    success: function(response){
      var r=JSON.parse(response);
      cq=r.quote;
      ca=r.author;
      tw=cq+" ---"+ca;
      $("#quo").html(cq);
      $("#auth").html("---"+ca);
    }
  });
}
$(document).ready(function(){
  qgen();
  $("#testButton").on("click",qgen);
  $("#postButton").on("click",function(){
    var twtLink = 'https://twitter.com/intent/tweet?related=quotebot&text=' +encodeURIComponent(tw);
 window.open(twtLink,'_blank');
  });
});