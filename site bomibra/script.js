// Código JavaScript para o menu dropdown
document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown');
  
    dropdownItems.forEach(function(item) {
      const dropdownLink = item.querySelector('a');
      const dropdownContent = item.querySelector('.dropdown-content');
  
      dropdownLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownContent.classList.toggle('show');
      });
  
      item.addEventListener('mouseleave', function() {
        dropdownContent.classList.remove('show');
      });
    });
  });
  