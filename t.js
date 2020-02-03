function visitPage() { 
  event.preventDefault(); 
  var URL = document.getElementsById('cdURL').value; 
    if (URL != ''){ 
        window.location = '?cdURL=' + btoa(URL); 
       } 
}
