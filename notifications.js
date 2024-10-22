document.addEventListener('DOMContentLoaded', () => {
    const notificationsList = document.getElementById('notifications-list');

    const userEmail = "user@example.com"; // Replace with dynamic user email from session or login
    const dbRef = database.ref('users/' + userEmail.replace('.', '_'));

    dbRef.once('value', (snapshot) => {
        const userData = snapshot.val();

        if (userData && userData.paymentStatus === 'pending') {
            notificationsList.innerHTML = `
                <div class="notification">
                    <p>Your payment for the <strong>${userData.package}</strong> package is delayed.</p>
                    <button id="pay-now">Pay Now</button>
                </div>
            `;
            
            // Redirect to billing page on click
            document.getElementById('pay-now').addEventListener('click', () => {
                // Store selected package in localStorage for billing
                localStorage.setItem('selectedPackage', JSON.stringify({
                    name: userData.name,
                    email: userData.email,
                    package: userData.package
                }));
                window.location.href = 'billing.html';
            });
        } else {
            notificationsList.innerHTML = `<p>No pending payments.</p>`;
        }
    });
});
