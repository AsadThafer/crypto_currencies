
//AJAX TABLE


$.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((data)=>{
  currtable = $('#CryptoTable');


  for(currtd = 0 ;currtd<data.length;currtd++){
    console.log(data)
    currtable.append(`<tr>
    <td>${data[currtd].market_cap_rank}</td>
    <td>${data[currtd].id}</td>
    <td>${data[currtd].current_price}</td>
    <td>${data[currtd].high_24h}</td>
    <td>${data[currtd].low_24h}</td>
    <td>${data[currtd].market_cap}</td>
  </tr>`)
  }
  

}
      

).catch((e) =>{
    console.log(e)
})