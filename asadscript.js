//AJAX


$.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((data)=>{
    currdiv = $('.carousel-inner');
    console.log(data.length);
    for (currnum = 0; currnum <= 5; currnum++) {
        if(currnum==0){
            currdiv.append(`
            <div class="carousel-item active text-center">
                    <img class="" src="${data[currnum].image}"alt="${data[currnum].id}">
                    <div class="carousel-caption d-md-block">
                      <h5>${data[currnum].id}</h5>
                      <p>${data[currnum].symbol}</p>
                    </div>
                    
        `);
        currnum++;       
        }
        else{
            currdiv.append(`
            <div class="carousel-item text-center ">
                    <img class="mx-auto" src="${data[currnum].image}" alt="${data[currnum].id}">
                    <div class="carousel-caption d-md-block">
                      <h5>${data[currnum].id}</h5>
                      <p>${data[currnum].symbol}</p>
                    </div>
        `);
        }
        }

}
      

).catch((e) =>{
    console.log(e)
})



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




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



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
