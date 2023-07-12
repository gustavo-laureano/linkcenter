function theme(){
  try{
    let b = document.getElementsByClassName('light');
    b[0].setAttribute("class", "dark");
    }
    catch{
    let a = document.getElementsByClassName('dark');
    a[0].setAttribute("class", "light");  
    }
}
/*function info(){
    document.getElementById('info').style.display = "block";
//sumir com o tempo

  }*/

