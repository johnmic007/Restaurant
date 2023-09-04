const searchicon1=document.querySelector('#searchIcon1');
const srchicon1=document.querySelector('#srchIcon1');
const search1=document.querySelector('#searchInput1');

searchIcon1.addEventListener('click', function(){
  search1.style.display='flex';
  searchicon1.style.display='none';
})
const searchicon2=document.querySelector('#searchIcon2');
const srchicon2=document.querySelector('#srchIcon2');
const search2=document.querySelector('#searchInput2');

searchIcon2.addEventListener('click', function(){
  search2.style.display='flex';
  searchicon2.style.display='none';
})

const bar=document.querySelector('.fa-bars');
const cross=document.querySelector('#hdCross');
const headerBar=document.querySelector('.headerBar');

bar.addEventListener('click',function(){
  setTimeout(()=>{
    cross.style.display='block';
  },200);
  headerBar.style.right='0%';
})

cross.addEventListener('click', function(){
  cross.style.display='none';
  headerBar.style.right='-100%';
})