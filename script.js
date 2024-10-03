//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const age = parseInt(document.getElementById('age').value);
    const name = document.getElementById('name').value;

    // Validation
    if (!age || !name) {
        alert("Both fields are required.");
        return;
    }

    // Create a promise to handle the age validation
    const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000);
    });

    // Handle the promise
    agePromise
        .then((name) => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch((name) => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});