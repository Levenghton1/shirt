document.addEventListener('DOMContentLoaded', function() {
    window.closePopup = function(responseText) {
        document.getElementById('popupContainer').style.display = 'none';
        document.getElementById('responseContainer').style.display = 'block';
        document.getElementById('responseText').innerText = "Ok. You are rewarded with a random meme.";
        displayImage();
        document.getElementById('instagramLink').style.display = 'block';
    };

    function displayImage() {
        const imageUrls = [
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2020-03-10_14-21-52.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2020-03-30_15-10-12.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2020-04-20_09-03-18.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2021-08-13_09-45-33.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2022-03-27_08-23-16.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2022-06-02_01-54-03.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2022-11-24_18-30-03.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2022-12-18_05-10-09.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2023-01-16_18-18-40.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2023-10-17_14-19-00.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2023-11-01_18-54-31.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2023-11-15_08-04-11.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2023-12-09_16-11-58.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2023-12-23_20-57-30.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2024-01-03_09-21-01.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2024-01-05_23-37-26.jpg',
            'https://raw.githubusercontent.com/Levenghton1/shirt/main/photo_2024-01-07_08-32-59.jpg'
        ];

        const imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        const memeImage = document.getElementById('memeImage');
        memeImage.onload = function() {
            document.querySelector('.loader').style.display = 'none';
            memeImage.style.display = 'block';
        };
        memeImage.src = imageUrl;
        document.getElementById('responseContainer').insertAdjacentHTML('afterbegin', '<div class="loader"></div>');
    }
});
