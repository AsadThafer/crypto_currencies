
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

function searchtable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("CryptoSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("CryptoTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
