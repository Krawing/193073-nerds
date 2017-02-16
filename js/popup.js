var modalOpen = document.querySelector(".modal-open");
var modalClose = document.querySelector(".modal-close")
var modalPopup = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");
var modalName = modalPopup.querySelector("[id=name]");
var modalForm = modalPopup.querySelector("form");
var modalUser = modalPopup.querySelector("#name");
var modalEmail = modalPopup.querySelector("#email");
var modalText = modalPopup.querySelector("#text");

modalOpen.addEventListener("click", function(event){
	event.preventDefault();
	modalPopup.classList.add("modal-show");
	modalOverlay.classList.add("modal-overlay-show");
	modalName.focus();
});
modalClose.addEventListener("click", function(event){
	event.preventDefault();
	modalPopup.classList.remove("modal-show");
	modalOverlay.classList.remove("modal-overlay-show");
});
modalForm.addEventListener("submit", function(event){
	if (!modalUser.value || !modalEmail.value || !modalText.value) {
		event.preventDefault();
		modalPopup.classListAdd("modal-error");
		console.log("Что то не заполнено");
	}
});
modalOverlay.addEventListener("click", function(event) {
	event.preventDefault();
	modalPopup.classList.remove("modal-show");
	modalOverlay.classList.remove("modal-overlay-show");
});