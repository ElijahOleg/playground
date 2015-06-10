var data = [
  {name: "ryan", points: 14},{name: "collin", points: 12},
  {name: "Tania", points: 10},{name: "Mike", points: 16}
 ];

var sortedData = data.sort(function(a,b){
  return (a.points > b.points);
});

$(document).ready(function(){
  $("#get-data").click(function(){
    for(var i=0; i < data.length; i++){
      var eachData = sortedData[i];

      var datali = $(".player:last").clone(true).show();
       datali.find(".data").text(eachData["name"] + "--" + eachData["points"]);

      $(".players").prepend(datali);
    }

  });
});
