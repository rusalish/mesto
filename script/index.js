
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
    popupElement.classList.add('popup_is_opened');
    popupInputNameElement.value = profileNameElement.textContent;
    popupInputOccupationElement.value = profileOccupationElement.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_is_opened');
}

function handleFormSubmit (event) {
    event.preventDefault();
    profileNameElement.textContent = popupInputNameElement.value;
    profileOccupationElement.textContent = popupInputOccupationElement.value;
    closePopup();
}

function oldName () {
    popupInputNameElement = popupFormElement[0].setAttribute('value', profileNameElement.textContent)
    popupInputOccupationElement = popupFormElement[1].setAttribute('value', profileOccupationElement.textContent)
}

const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) return;
    closePopup();
}

popupFormElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay)