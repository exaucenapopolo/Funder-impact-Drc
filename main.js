// Menu burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Gestion du formulaire d'inscription (simulation)
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Ici vous enverriez les données à un serveur
        alert('Votre candidature a été soumise (simulation). Un email de confirmation vous sera envoyé.');
        registerForm.reset();
    });
}

// Système de vote (simulation avec localStorage)
// Liste fictive de candidats
const candidates = [
    { id: 1, name: 'Jean Kabongo', company: 'Tech Innov', category: 'Fondateur de l’Année', photo: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Marie Claire', company: 'Eco Solutions', category: 'Femme Fondatrice', photo: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Paul Mputu', company: 'Digital Congo', category: 'Startup Tech', photo: 'https://via.placeholder.com/150' },
    // Ajoutez d'autres candidats
];

// Récupérer les votes déjà effectués depuis localStorage
let votes = JSON.parse(localStorage.getItem('votes')) || {};

function renderCandidates() {
    const container = document.getElementById('candidatesList');
    if (!container) return;

    container.innerHTML = '';
    candidates.forEach(candidate => {
        const card = document.createElement('div');
        card.className = 'candidate-card';
        card.innerHTML = `
            <img src="${candidate.photo}" alt="${candidate.name}">
            <h3>${candidate.name}</h3>
            <p>${candidate.company}</p>
            <p><strong>${candidate.category}</strong></p>
            <button class="vote-btn" data-id="${candidate.id}" ${votes[candidate.id] ? 'disabled' : ''}>
                ${votes[candidate.id] ? 'Déjà voté' : 'Voter'}
            </button>
        `;
        container.appendChild(card);
    });

    // Ajouter les événements aux boutons
    document.querySelectorAll('.vote-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if (!votes[id]) {
                votes[id] = true;
                localStorage.setItem('votes', JSON.stringify(votes));
                e.target.disabled = true;
                e.target.textContent = 'Déjà voté';
                alert('Votre vote a été enregistré (simulation). Merci !');
            }
        });
    });
}

// Lancer le rendu si on est sur la page vote
if (document.getElementById('candidatesList')) {
    renderCandidates();
}