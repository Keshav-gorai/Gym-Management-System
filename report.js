// Example data to populate the report table
const reports = [
    { type: 'Attendance', date: '2024-10-01', description: 'October Attendance Overview', status: 'Completed' },
    { type: 'Performance', date: '2024-09-30', description: 'September Member Performance', status: 'Pending' },
    { type: 'Billing', date: '2024-09-15', description: 'September Billing Reports', status: 'Completed' },
    { type: 'Attendance', date: '2024-09-01', description: 'September Attendance Overview', status: 'Completed' },
    { type: 'Performance', date: '2024-08-30', description: 'August Member Performance', status: 'Completed' }
];

// Function to render reports into the table
function renderReports(filteredReports) {
    const tableBody = document.getElementById('reportTableBody');
    tableBody.innerHTML = '';  // Clear previous content

    filteredReports.forEach(report => {
        const row = `
            <tr>
                <td>${report.type}</td>
                <td>${report.date}</td>
                <td>${report.description}</td>
                <td>${report.status}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Initial render of all reports
renderReports(reports);

// Filter reports based on selected report type
document.getElementById('reportType').addEventListener('change', (event) => {
    const selectedType = event.target.value;
    if (selectedType === 'all') {
        renderReports(reports);  // Show all reports
    } else {
        const filteredReports = reports.filter(report => report.type.toLowerCase() === selectedType.toLowerCase());
        renderReports(filteredReports);  // Show filtered reports
    }
});

// Export report functionality (for example, simple console log here)
document.getElementById('exportBtn').addEventListener('click', () => {
    console.log('Exporting reports...');
    alert('Reports exported successfully!');
});
