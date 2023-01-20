let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (event)=>{
    if(event.target.innerHTML == '='){
      string = eval(string);
      console.log(string);
      document.querySelector('input').value = string;

    }else{
    console.log(event.target);
    string = string + event.target.innerHTML;
    document.querySelector('input').value = string;
      
    }
  })
})

document.querySelector('#ce').onclick = () => {
    document.querySelector('input').value = '';
};
