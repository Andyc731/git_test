const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  
  