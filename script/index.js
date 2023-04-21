
const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-btn');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');


const togglePopupVisibility = function () {
    console.log('togglePopupVisibility');
    popupElement.classList.toggle('popup_is-opened')
}

popupOpenButtonElement.addEventListener('click', open);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);

const openPopup = function () {
    console.log('openPopup');
    popupElement.classList.add('popup_is-opened');
}

const closePopup = function () {
    console.log('closePopup');
    popupElement.classList.remove('popup_is-opened');
}

const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) return;

    closePopup();
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay)
