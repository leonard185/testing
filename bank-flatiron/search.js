document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const listItems = document.querySelectorAll('#list li');
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});