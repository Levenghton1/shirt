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
        'https://drive.google.com/uc?id=102SNTNuzrb40WUFEhreGo1IYd7aN3QC1',
        'https://drive.google.com/uc?id=19IK2YH4ewR3rWNqvKhwRd6vi5JnUQ6rg',
        'https://drive.google.com/uc?id=1tOU8a0Dp3phGY8J9lgq96adC7RokUIv-',
        'https://drive.google.com/uc?id=1wH1k4_MtoQ3ZNqs1iokYy5kKjyJ_Y9pj',
        'https://drive.google.com/uc?id=1MOLLaP_YYqgjcIlYB83RpvJMEJHp9t1N',
        'https://drive.google.com/uc?id=1qNCJBu9_1HeidB-LbfArfxqu2EYmJVs1',
        'https://drive.google.com/uc?id=1qVRIUqNk6U87goSteaoOHc8JSkbREsKU',
        'https://drive.google.com/uc?id=1I2JajGrg-sGkcF6O7_MMPWUMqTARV5ni',
        'https://drive.google.com/uc?id=1wKgUnNe-xJS_oqxz3mnMhJ10Z9GqJkPg',
        'https://drive.google.com/uc?id=1T0coNfASR_4k7RSNOMbC8PBip5Mo_zbs',
        'https://drive.google.com/uc?id=1R4f-q1SuHxnzkFMHkui3Q5jehwUQ9gIT',
        'https://drive.google.com/uc?id=1Oy8ZkGaG-bgkEzutHYjJ-OvuXvlpdnGG',
        'https://drive.google.com/uc?id=13CSxeslnJUuY92DkNO_F-w8Z5ibyctEG',
        'https://drive.google.com/uc?id=1H8RS23Re6RxtkQV9KWnU1rHZNsemQi8I',
        'https://drive.google.com/uc?id=1weNm5fQYhLxC9Ert7RErxNJk2PKQP62P',
        'https://drive.google.com/uc?id=1oPFhjZdPIgiTQ_b6f4mKC4voduktHUpa',
        'https://drive.google.com/uc?id=1_jzZE-DtLWyW2gyEkrvbZHbjhvlN80s0'
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
