document.addEventListener('DOMContentLoaded', (event) => {
    const characters = document.querySelectorAll('.character');
    const popup = document.getElementById('characterPopup');
    const popupImage = document.getElementById('popupImage');
    const popupName = document.getElementById('popupName');
    const popupDescription = document.getElementById('popupDescription');
    const closeBtn = document.querySelector('.close');

    characters.forEach(character => {
        character.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const name = this.querySelector('h2').innerText;

            popupImage.src = imgSrc;
            popupName.innerText = name;

            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
