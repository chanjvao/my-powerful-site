const title = document.getElementById('title');
const btn = document.getElementById('mybtn');
console.log('Знайшов заголовок:', title); 
console.log('Знайшов кнопку:', btn);
btn.addEventListener('click', function() { 
  title.textContent = 'JS працює! 🎉'; 
  title.style.color = 'teal';
   btn.textContent = 'Натиснуто ✓'; 
  btn.style.background = 'teal';   
btn.style.color = 'white'; });