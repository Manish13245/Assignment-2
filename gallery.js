document.addEventListener('DOMContentLoaded', () => {
    const featuredImage = document.querySelector('#gallery figure img');
    const figcaption = document.querySelector('#gallery figcaption');
    const thumbnails = document.querySelectorAll('#gallery ul li img');

    // Array containing image details for dynamic gallery display
    const images = [
        { large: 'flowers-pink-large.jpg', small: 'flowers-pink-small.jpg', caption: 'Market in Münster, North Rhine-Westphalia, Germany By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=62071586' },
        { large: 'flowers-purple-large.jpg', small: 'flowers-purple-small.jpg', caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48576226' },
        { large: 'flowers-red-large.jpg', small: 'flowers-red-small.jpg', caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=40957238' },
        { large: 'flowers-white-large.jpg', small: 'flowers-white-small.jpg', caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48211466' },
        { large: 'flowers-yellow-large.jpg', small: 'flowers-yellow-small.jpg', caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=61514522' }
    ];

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            featuredImage.src = images[index].large;
            figcaption.textContent = images[index].caption;


            thumbnails.forEach(img => img.classList.add('inactive'));
            thumbnail.classList.remove('inactive');
        });
    });
});
