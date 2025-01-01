// Function to filter the table based on search input
function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('dataTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {  // Start from 1 to skip the header row
        let td = tr[i].getElementsByTagName('td')[0];  // Search in the first column (Name)
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}

// Function to filter the table based on the dropdown value
function filterTable() {
    const filter = document.getElementById('filterDropdown').value.toLowerCase();
    const table = document.getElementById('dataTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {  // Start from 1 to skip the header row
        const categoryCell = tr[i].getElementsByTagName('td')[1];  // Check the Category column
        if (categoryCell) {
            const categories = categoryCell.textContent.toLowerCase();
            if (filter === 'all' || categories.includes(filter)) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}

// Function to handle redirection on name click
function openPage(pageUrl) {
    window.location.href = pageUrl;  // Redirect to the specified page
}

