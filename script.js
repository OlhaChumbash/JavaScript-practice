function sortTable(columnIndex) {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].textContent.trim().toLowerCase();
        const cellB = b.cells[columnIndex].textContent.trim().toLowerCase();
        return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';

    for (const row of rows) {
        tbody.appendChild(row);
    }
}
