
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

async function fetchDynamicContent() {
    try {
        const response = await fetch('https://api.example.com/dynamic-content');
        const data = await response.json();
        displayDynamicContent(data);
    } catch (error) {
        console.log('Error fetching dynamic content:', error);
    }
}

function displayDynamicContent(data) {
    const contentContainer = document.getElementById('dynamic-content-container');
    data.forEach(item => {
        const element = document.createElement('div');
        element.innerText = item.content; // Adjust according to data structure
        contentContainer.appendChild(element);
    });
}

document.addEventListener('DOMContentLoaded', fetchDynamicContent);
        