document.addEventListener('DOMContentLoaded', function () {
    const commentCards = document.querySelectorAll('.comment-card');
    const commentsData = Array.from(commentCards).map(card => ({
        avatar: card.querySelector('.comment-avatar img').src,
        author: card.querySelector('.comment-author h4').innerText,
        username: card.querySelector('.comment-author p').innerText,
        comment: card.querySelector('.comment-content p').innerText
    }));

    let index = 0;

    function rotateCommentsInMultipleCards() {
        // Boucler à travers les cartes et leur affecter les commentaires décalés
        commentCards.forEach((card, i) => {
            const nextIndex = (i + index) % commentsData.length;
            const nextComment = commentsData[nextIndex];
            card.querySelector('.comment-avatar img').src = nextComment.avatar;
            card.querySelector('.comment-author h4').innerText = nextComment.author;
            card.querySelector('.comment-author p').innerText = nextComment.username;
            card.querySelector('.comment-content p').innerText = nextComment.comment;
        });

        index = (index + 1) % commentsData.length;
    }

    function rotateCommentsInSingleCard() {
        const singleCard = commentCards[0]; // Afficher uniquement la première carte
        const nextComment = commentsData[index];
        singleCard.querySelector('.comment-avatar img').src = nextComment.avatar;
        singleCard.querySelector('.comment-author h4').innerText = nextComment.author;
        singleCard.querySelector('.comment-author p').innerText = nextComment.username;
        singleCard.querySelector('.comment-content p').innerText = nextComment.comment;

        index = (index + 1) % commentsData.length;
    }

    function handleScreenResize() {
        if (window.matchMedia("(max-width: 500px)").matches) {
            // Si la taille de l'écran est inférieure à 500px, afficher une seule carte et faire défiler les commentaires
            commentCards.forEach((card, i) => {
                card.style.display = i === 0 ? 'block' : 'none';
            });
            setInterval(rotateCommentsInSingleCard, 7000);
        } else {
            // Si la taille de l'écran est supérieure à 500px, afficher trois cartes côte à côte et faire défiler les commentaires entre elles
            commentCards.forEach(card => card.style.display = 'block');
            setInterval(rotateCommentsInMultipleCards, 7000);
        }
    }

    handleScreenResize(); // Appeler la fonction au chargement de la page
    window.addEventListener('resize', handleScreenResize); // Réagir aux changements de taille de la fenêtre
});

//script taille image
document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');

    const largeImages = [
        './Images/ann.jpeg',
        './Images/bridal.jpeg',
        './Images/baby.jpeg'
    ];

    const smallImages = [
        './Images/ann.jpeg',
        './Images/Gâteau/A15.jpg',
        './Images/salé/salé8.jpg'
    ];

    function updateCarouselImages() {
        const screenWidth = window.innerWidth;

        // Change les images en fonction de la taille de l'écran
        carouselItems.forEach((item, index) => {
            if (screenWidth >= 500) {
                item.querySelector('img').src = largeImages[index];
            } else {
                item.querySelector('img').src = smallImages[index];
            }
        });
    }

    // Initialiser les images du carrousel
    updateCarouselImages();

    // Mettre à jour les images lors du redimensionnement de la fenêtre
    window.addEventListener('resize', updateCarouselImages);
});
