document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('package-form');
    const selectedPackagesList = document.getElementById('selected-packages');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get the form data
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const packageName = document.getElementById('package').value;

        // Check if the package is selected
        if (packageName === "") {
            alert("Please select a package.");
            return;
        }

        // Save selected package info to localStorage
        localStorage.setItem('selectedPackage', JSON.stringify({
            name: fullName,
            email: email,
            package: packageName
        }));

        // Redirect to the billing page
        window.location.href = 'billing.html';
    });
});

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = `${fullName} (${email}) selected ${packageName}`;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            listItem.remove();
        });

        // Append remove button to the list item
        listItem.appendChild(removeButton);

        // Append list item to the selected packages list
        selectedPackagesList.appendChild(listItem);

        // Clear form
        form.reset();
