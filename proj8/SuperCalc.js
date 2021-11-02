
function turbo() {
    let result=0;
    let box = document.getElementById("check");
    let tea = document.getElementById("types");
    let quantity = document.getElementById("quantitys");
    let radios = document.getElementsByName("radiolimb");
    let radiosSecret = document.getElementById("radios");
    let boxSecret = document.getElementById("boxes");
    if (tea.selectedIndex == 2) {
      radiosSecret.style.display = "block";
      boxSecret.style.display = "none";
      box.checked=false;
    } else if (tea.selectedIndex == 3) {
      radiosSecret.style.display = "none";
      boxSecret.style.display = "block";
      for (let radio of radios) {
        radio.checked = false;
      }
    } else {
      radiosSecret.style.display = "none";
      boxSecret.style.display = "none";
      for (let radio of radios) {
        radio.checked = false;
      }
      box.checked=false;
    }
    result += parseInt(tea.options[tea.selectedIndex].value);
  if (box.checked==true)
      result+=parseInt(box.value);
  for (let radio of radios) {
    if (radio.checked) {
        result += parseInt(radio.value);
    }
  }
  result*=quantity.value;
    document.getElementById("results").innerHTML = result;
  }
  
  