const themeSauvegarde = localStorage.getItem('theme') || 'sombre';
if (themeSauvegarde === 'clair') {
  document.body.classList.add('theme-clair');
}

const boutonTheme = document.createElement('button');
boutonTheme.id = 'toggle-theme';
boutonTheme.setAttribute('aria-label', 'Basculer thème clair / sombre');
boutonTheme.textContent = themeSauvegarde === 'clair' ? '🦝 Sombre' : '🐇 Clair';
document.querySelector('header').appendChild(boutonTheme);

boutonTheme.addEventListener('click', function () {
  document.body.classList.toggle('theme-clair');

  if (document.body.classList.contains('theme-clair')) {
    localStorage.setItem('theme', 'clair');
    boutonTheme.textContent = '🦝 Sombre';
  } else {
    localStorage.setItem('theme', 'sombre');
    boutonTheme.textContent = '🐇 Clair';
  }
});

const boutonsFiltres = document.querySelectorAll('.filter-btn');
const sections = document.querySelectorAll('.box[data-tag]');

boutonsFiltres.forEach(function (bouton) {
  bouton.addEventListener('click', function () {
    appliquerFiltre(bouton);
  });

  bouton.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      appliquerFiltre(bouton);
    }
  });
});

function appliquerFiltre(boutonActif) {
  boutonsFiltres.forEach(function (b) { b.classList.remove('active'); });
  boutonActif.classList.add('active');

  const filtre = boutonActif.getAttribute('data-filter');

  sections.forEach(function (section) {
    if (filtre === 'all' || section.getAttribute('data-tag') === filtre) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

sections.forEach(function (section) {
  section.setAttribute('tabindex', '0');
});

document.addEventListener('keydown', function (e) {
  const focusable = Array.from(
    document.querySelectorAll('a, button, [tabindex="0"]')
  );
  const index = focusable.indexOf(document.activeElement);

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const suivant = focusable[index + 1];
    if (suivant) suivant.focus();
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    const precedent = focusable[index - 1];
    if (precedent) precedent.focus();
  }
});
