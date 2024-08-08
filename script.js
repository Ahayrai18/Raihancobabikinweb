document.addEventListener('DOMContentLoaded', function() {
  particlesJS.load('particles-js', 'path_to_particles.json', function() {
      console.log('particles.js config loaded');
  });

  function showSection(sectionId) {
      document.querySelectorAll('.section').forEach(function(section) {
          section.style.display = 'none';
      });
      document.getElementById(sectionId).style.display = 'block';
  }

  showSection('profile');
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

function showStaffExperience(number) {
  const staffExperiences = {
      1: 'Detail Staff Experience 1...',
      2: 'Detail Staff Experience 2...',
      3: 'Detail Staff Experience 3...'
      // Tambahkan detail pengalaman staff sesuai nomor
  };
  document.getElementById('staff-experience-content').innerHTML = staffExperiences[number];
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('profile'); // Tampilkan Profile saat halaman pertama kali dibuka
});
