
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#000000", "#1EA52C", "#DC8851", "#98375A", "#183EC3"];

new Chart("myChart", {
type: "doughnut",
data: {
    datasets: [
    {
        backgroundColor: barColors,
        data: yValues,
    },
    ],
} 
})