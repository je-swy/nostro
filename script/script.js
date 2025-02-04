document.querySelectorAll('.accordion_title').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        let content = button.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = "0 15px";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "15px";
        }
    });
});