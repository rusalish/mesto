
const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-btn');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileNameElement = document.querySelector('.profile__name');
const profileOccupationElement = document.querySelector('.profile__occupation');
const popupInputNameElement = document.querySelector('.popup__input_type_name');
const popupInputOccupationElement = document.querySelector('.popup__input_type_occupation');
const popupFormElement = document.querySelector('.profile-form');
const popupSubmitElement = document.querySelector('.popup__save-btn')


const togglePopupVisibility = function () {
    console.log('togglePopupVisibility');
    popupElement.classList.toggle('popup_is_opened')
}

const openPopup = function () {
    console.log('openPopup');
    popupElement.classList.add('popup_is_opened');
    popupInputNameElement.value = profileNameElement.textContent;
    popupInputOccupationElement.value = profileOccupationElement.textContent;
}

const closePopup = function () {
    console.log('closePopup');
    popupElement.classList.remove('popup_is_opened');
}

const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) return;
    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay)