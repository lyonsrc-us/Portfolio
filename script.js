const form = document.getElementById('form');
const search = document.getElementById('search');
const sections = document.querySelectorAll('.project');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const term = search.value.toLowerCase().trim();

  if (!term) return;

  let found = false;

  sections.forEach(section => {
    const text = section.innerText.toLowerCase();

    if (text.includes(term)) {
      section.style.display = 'block';
      section.scrollIntoView({ behavior: 'smooth' });
      found = true;
    } else {
      section.style.display = 'none';
    }
  });

});