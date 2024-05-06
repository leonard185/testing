document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-transaction-form');
    const transactionList = document.getElementById('transaction-list');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const Date = document.getElementById('Date').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const amount = parseFloat(document.getElementById('amount').value);

        // Add transaction to list
        addTransaction(Date,description,category,amount);

        // Clear form inputs
        document.getElementById('Date').value = '';
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    });

    
    // Function to add transaction to list
    function addTransaction(Date,description, category,amount) {
        const transactionItem = document.createElement('li');
        transactionItem.classList.add('transaction');
        transactionItem.innerHTML = `
            <span>${Date}</span>
            <span>${description}</span>
            <span>${category}</span>
            <span>${amount}</span>

            <button onclick="deleteTransaction(this)">Delete Transaction</button>
        `;
        transactionList.appendChild(transactionItem);
    }
    function deleteTransaction(button) {
        // Get the parent element of the button (which is the transaction item)
        const transactionItem = button.parentElement;
        // Remove the transaction item from its parent (the list)
        transactionItem.remove();
    }

    
});
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