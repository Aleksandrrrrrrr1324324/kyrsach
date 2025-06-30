const filterLinks = document.querySelectorAll('.filter a');
const items = document.querySelectorAll('.grid-item');

filterLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const filter = link.getAttribute('data-filter')

    items.forEach(item => {
      const brand = item.getAttribute('data-brand')
      if (filter === 'all' || brand === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    })

    filterLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  })
})