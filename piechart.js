$(document).ready(
    function(){
        showGraph();
    }
);
function showGraph()
{
  $.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",function(data){
    console.log(data);
    othercurrenciesmarketcap = 0;
    var name = [];
    var details = [];
    for(currcd = 0 ;currcd<5;currcd++){
        name.push(data[currcd].id) ; 
        details.push(data[currcd].market_cap);
    
   
}
for(other = 5 ;other<100;other++){
    console.log(data[other].id);
    othercurrenciesmarketcap += data[other].market_cap;
    console.log(othercurrenciesmarketcap);
}

        name.push('other Currencies') ; 
        details.push(othercurrenciesmarketcap);
        console.log(details);
var chartdata={
    labels: name,
    datasets: [
    {
        backgroundColor: ["#ffa300",'#ecf0f1','#26A17B','#2775ca','#f0b90b','#808080'],
        data: details
    }
    ]
};
var options={
title: {
display: true,
text: 'Crypto Currency Market Cap Chart'
},
elements:{
arc: {
borderWidth: 0
}  
}
};
var graphTarget = $("#myChart");
var graph=new Chart(graphTarget,{
type: 'pie',
 data: chartdata,
 options:options 
});



})
};  
  ;




