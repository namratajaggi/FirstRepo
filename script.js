function greet() {
    const name = document.getElementById('nameInput').value;
    const greeting = document.getElementById('greeting');
    greeting.textContent = name ? `Hello, ${name}!` : 'Please enter your name';
}
