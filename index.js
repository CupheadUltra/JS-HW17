// Завдання 1
let textButton = document.querySelector('.text-button');
let textField = document.querySelector('.text-field');

textButton.addEventListener('click', function() {
    textButton.textContent = textField.value;
});

// Завдання 2
let image = document.querySelector('.image');
image.src = "image.png";

// Завдання 3
let link = document.querySelector('.link');
let linkImage = document.querySelector('.link-image');

link.href = "https://chatgpt.com/";
linkImage.setAttribute('alt', 'К І Т');

// Завдання 4
let firstItem = document.querySelector('.list li');
firstItem.textContent = "Новий текст";
