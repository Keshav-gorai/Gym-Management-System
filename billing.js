document.addEventListener('DOMContentLoaded', () => {
    const billingDetailsDiv = document.getElementById('billing-details');
    const totalAmountSpan = document.getElementById('total-amount');

    const selectedPackage = JSON.parse(localStorage.getItem('selectedPackage'));

    if (selectedPackage) {
        const packageName = selectedPackage.package;
        let price = 0;

        switch (packageName) {
            case 'Monthly':
                price = 50;
                break;
            case 'Quarterly':
                price = 135;
                break;
            case 'Half-Yearly':
                price = 250;
                break;
            case 'Yearly':
                price = 450;
                break;
        }

        billingDetailsDiv.innerHTML = `
            <p><strong>Name:</strong> ${selectedPackage.name}</p>
            <p><strong>Email:</strong> ${selectedPackage.email}</p>
            <p><strong>Selected Package:</strong> ${packageName}</p>
            <p><strong>Price:</strong> $${price}</p>
        `;

        totalAmountSpan.textContent = `$${price}`;
    }

    document.getElementById('pay-now').addEventListener('click', () => {
        alert('Payment processed successfully!');

        // Update Firebase payment status
        const userEmail = selectedPackage.email;
        const dbRef = database.ref('users/' + userEmail.replace('.', '_')); // Firebase doesn't allow "." in keys
        dbRef.update({
            paymentStatus: 'paid'
        });

        // Clear localStorage and redirect to the packages page
        localStorage.removeItem('selectedPackage');
        window.location.href = 'packages.html';
    });
});
