$("#sumit-btn").on("click", function(event) {
    event.preventDefault();
  
    const newCar = {
        model: $("#model").val().trim(),
        make: $("#make").val().trim(),
        year: $("#year").val().trim(), 
        zeroToSixty: $("#zeroToSixty").val().trim(),
        quarterMile: $("#quarterMile").val().trim(),

    };

    $.post("/api/new", newCar)
    .then(function(data){
        console.log(data);

        alert("adding car...")
    });

    $("#model").val("");
    $("#make").val("");
    $("#year").val("");
    $("#zeroToSixty").val("");
    $("#quarterMile").val("");
    
});
