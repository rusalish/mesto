
const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-btn');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileNameElement = document.querySelector('.profile__name');
const profileOccupationElement = document.querySelector('.profile__occupation');
const popupInputNameElement = document.querySelector('.popup__input_type_name');
const popupInputOccupationElement = document.querySelector('.popup__input_type_occupation');
const popupSubmitElement = document.querySelector('.popup__save-btn')
const popupFormElement = document.querySelector('.popup__container');

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    popupInputNameElement.value = profileNameElement.textContent;
    popupInputOccupationElement.value = profileOccupationElement.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

function handleFormSubmit (event) {
    event.preventDefault();
    profileNameElement.textContent = popupInputNameElement.value;
    profileOccupationElement.textContent = popupInputOccupationElement.value;
    closePopup();
}


const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) return;
    closePopup();
}

popupFormElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay)