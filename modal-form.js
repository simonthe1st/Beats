const openBtn = document.querySelector("#submit");
const successModalF = createModal();
const bodyF = document.body;


openBtn.addEventListener("click", e => {
    e.preventDefault();
    bodyF.appendChild(successModalF);
})

function createModal(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay-form");

    const template = document.querySelector("#overlayTemplate-form");

    overlayElement.innerHTML = template.innerHTML
    overlayElement.addEventListener("click", e => {
        if (e.target == overlayElement) {
            closeElement.click();
        }
    })

    const closeElement = overlayElement.querySelector(".app-close-modal");
    closeElement.addEventListener("click", e => {
        e.preventDefault();
        bodyF.removeChild(overlayElement);
    })

    return overlayElement;
}