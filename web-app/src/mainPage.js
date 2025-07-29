document.addEventListener("DOMContentLoaded", function() {
  fetch('../src/cars.json')
    .then(response => response.json())
    .then(data => {
      const sidebar = document.querySelector('.sidebar');
      
      data.forEach(function(car) {
        const btn = document.createElement('button');
        btn.textContent = car.name;
        btn.className = "w-full py-4 text-center p-2 bg-gray-700 mb-2 rounded hover:bg-yellow-500 hover:text-black transition"; 
        
        btn.addEventListener('click', () => {
          // remove active de todos os botões
          sidebar.querySelectorAll('button').forEach(b => {
            b.style.backgroundColor = '#374151'; // cinza original
            b.style.color = 'white';
          });
          // adiciona active só no clicado
          btn.style.backgroundColor = '#facc15'; // amarelo
          btn.style.color = 'black';
        });

        sidebar.appendChild(btn);
      });
    })
    .catch(error => console.error('Erro ao carregar cars.json:', error));
});