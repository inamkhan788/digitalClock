const hour = document.querySelector('#hours');
const minute = document.querySelector('#mins');
const second = document.querySelector('#sec');


setInterval(()=>{


const currentTime=new Date();

hour.innerHTML= (currentTime.getHours()<10?"0":"")+ currentTime.getHours();
minute.innerHTML= (currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes();
second.innerHTML= (currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds();
},1000);