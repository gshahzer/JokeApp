const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

document.getElementById('get-joke-btn').addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const jokeElement = document.getElementById('joke');

            if (data.type === 'single') {
                jokeElement.innerHTML = `<p>${data.joke}</p>`;
            } else if (data.type === 'twopart') {
                jokeElement.innerHTML = `<p>${data.setup}</p><p><strong>${data.delivery}</strong></p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the joke:', error);
            alert('Error fetching the joke. Please try again.');
        });
});
