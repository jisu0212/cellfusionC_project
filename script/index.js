const bank_info = document.querySelector ('.bank_info')
const family = document.querySelector ('.family')
const bank_detail = document.querySelector ('.bank_detail')
const family_detail = document.querySelector ('.family_detail')
bank_info.addEventListener('mouseover', ()=>{
    bank_detail.style.display = 'block';
    family_detail.style.display = 'block';
})
family.addEventListener('mouseover', ()=>{
    family_detail.style.display = 'block';
    bank_detail.style.display = 'block';
})
bank_info.addEventListener('mouseout', ()=>{
    bank_detail.style.display = 'none';
    family_detail.style.display = 'none';
})
family.addEventListener('mouseout', ()=>{
    family_detail.style.display = 'none';
    bank_detail.style.display = 'none';
})
//===========================timer
const hour = document.querySelector ('.hour')
const min = document.querySelector ('.min')
const sec = document.querySelector ('.sec')
var count = 59
var timer = setInterval(function(){
    count--
    console.log(count)
    sec.innerHTML = count
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 59000)
console.log(count);
//=================================tab
