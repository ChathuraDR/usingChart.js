
$(document).ready(function () {
    $.ajax({
        url: "./php/getData.php",
        method: "GET",
        success: function(data){
            var id1 = [];
            var size1 = [];
            for (var i in data){
                id1.push("id"+ data[i].id);
                size1.push(data[i].size);
            }
            var chartdata = {
                labels: id1,
                datasets: [{
                    data: size1,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB"

                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }],
            };
            var ctx = $("#myChart");

            var bargraph = new Chart(ctx,{
                type: 'bar',                                //put 'pie' instead 'bar' if you want to get pie chart.(Options -> doughnut,bubble etc.)
                data: chartdata
            });
        },
        error: function(data){
            console.log(data);
        }


    });
});
