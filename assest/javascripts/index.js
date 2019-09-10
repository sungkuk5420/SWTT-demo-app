const homeHeader = document.querySelector('.header.home');
const feedHeader1 = document.querySelector('.header.feed1');
const feedHeader2 = document.querySelector('.header.feed2');
const mainPage = document.querySelector('.page-container.main-page');
const feedPage1 = document.querySelector('.page-container.feed-page1');
const feedPage2 = document.querySelector('.page-container.feed-page2');
const mainImage1 = document.querySelector('.page-container.main-page .main-image1');
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
    if(mainPage.classList.contains('hide')){
        return false;
    }
    mainImage1.classList.add('hide');
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

window.writeFeed = () => {
    if(mainPage.classList.contains('hide')){
        return false;
    }
    homeHeader.classList.add('hide');
    feedHeader1.classList.remove('hide');
    mainPage.classList.add('hide');
    feedPage1.classList.remove('hide');

    footer.querySelector('.active').classList.remove('active');
}

window.moveFeed2 = () => {
    feedPage1.classList.add('hide');
    feedPage2.classList.remove('hide');
    feedHeader1.classList.add('hide');
    feedHeader2.classList.remove('hide');
}