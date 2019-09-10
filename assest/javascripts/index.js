const header = document.querySelector('.header');
const mainPage = document.querySelector('.page-container.main-page');
const mainImage = document.querySelector('.page-container.main-page .main-image');
const mainImage2 = document.querySelector('.main-image2');
const imageSliderNav = document.querySelector('.image-slider-nav');
const contentName = document.querySelector('.store-info__content__name2');
const date = document.querySelector('.date-text .date');
const contentText = document.querySelector('.content-text');
const likeText = document.querySelector('.like-text');
const footer = document.querySelector('.footer');
window.home = () => {
    location.reload();
}
window.brand = () => {
    //change main image
    mainImage.classList.add('hide');
    mainImage2.classList.remove('hide');
    imageSliderNav.classList.remove('hide');

    contentName.textContent = '伊勢丹新宿店';
    date.textContent = ' 2019.9.4wed-17tue';
    likeText.textContent = 'いいね！285件';
    contentText.innerHTML = `YOAK Pop-Up<br>on Men's Building <a class="" href="/explore/tags/b1f_mensshoes/">#B1F_MensShoes</a><br>・<br><a class="" href="/explore/tags/yoak/">#yoak</a><br>・<br>www.imn.jp`;

    footer.querySelector('.active').classList.remove('active');
    footer.querySelector('.person').classList.add('active');
    document.body.scrollTop = 0;
}