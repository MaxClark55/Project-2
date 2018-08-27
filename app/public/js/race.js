$("#start-btn").on("click", function(event) {
    event.preventDefault();

$.get("/api", function(data) {

    for (var i = 0; i < data.length; i++) {
        const raceInfo = $("<tr>");
        raceInfo.addClass("race");
        raceInfo.attr("id", "raceInfo" + i);
        $("#raceInfo").append(raceInfo);
    
        $("#raceInfo" + i).append("<h3>Model:" + data[i].model + "</h4>");
  
        $("#raceInfo" + i).append("<h3>Year: " + data[i].year + "</h4>");
      
        $("#raceInfo" + i).append("<h3>Zero To Sixty: " + data[i].zeroToSixty + "</h4>");
       
        $("#raceInfo" + i).append("<h3>Quarter Mile: " + data[i].quarterMile + "</h4>");

        $("#raceInfo" + i).append("<h3>Make:" + data[i].make + "</h4>");

        $("#raceInfo" + i).append("<h3>Final Time:" + data[i].finalTime + "</h4>");
      }
    })
});
