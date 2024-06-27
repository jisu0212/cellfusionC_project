const bank_info = document.querySelector ('.bank_info')
const family = document.querySelector ('.family')
const bank_detail = document.querySelector ('.bank_detail')
const family_detail = document.querySelector ('.family_detail')
bank_info.addEventListener('mouseover', ()=>{
    bank_detail.style.display = 'block';
})
family.addEventListener('mouseover', ()=>{
    family_detail.style.display = 'block';
})
bank_info.addEventListener('mouseout', ()=>{
    bank_detail.style.display = 'none';
})
family.addEventListener('mouseout', ()=>{
    family_detail.style.display = 'none';
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
const categoryBtn = document.querySelectorAll ('.ranking_tab a')
const contents = document.querySelectorAll ('.ranking_pdt_wrap .pdt_slide')
for(let i = 0; i<7; i++){
    categoryBtn[i].addEventListener('click', function(e){
        e.preventDefault()
        contents[0].style = 'display:none';
        contents[1].style = 'display:none';
        contents[2].style = 'display:none';
        contents[3].style = 'display:none';
        contents[4].style = 'display:none';
        contents[5].style = 'display:none';
        contents[6].style = 'display:none';
        contents[i].style = 'display:block';
        categoryBtn[0].style = 'color:#000; font-weight:400';
        categoryBtn[1].style = 'color:#000; font-weight:400';
        categoryBtn[2].style = 'color:#000; font-weight:400';
        categoryBtn[3].style = 'color:#000; font-weight:400';
        categoryBtn[4].style = 'color:#000; font-weight:400';
        categoryBtn[5].style = 'color:#000; font-weight:400';
        categoryBtn[6].style = 'color:#000; font-weight:400';
        categoryBtn[i].style = 'color:#CF0A2C; font-weight:600';
    })
}
//메뉴바
const menu = document.querySelector('.icon_menu')
const menu_tabs = document.querySelector('.menu')
menu.addEventListener('click', (e)=>{
    e.preventDefault();
    menu_tabs.classList.toggle('on')
})
const search = document.querySelector('.icon_search')
const searching = document.querySelector('.searching')
search.addEventListener('click', (e)=>{
    e.preventDefault();
    searching.classList.toggle('on')
})