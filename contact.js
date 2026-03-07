// ------- EMAIL JS CONFIG ------
(function () {
    emailjs.init("TYFNCw3XK48znxUU6");
})();

document.getElementById("inp_submit").addEventListener("click", function (e) {
    e.preventDefault();

    let fname = document.querySelector('input[name="fname"]').value;
    let lname = document.querySelector('input[name="lname"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.getElementById("inp_message").value;

    if (!fname || !lname || !email || !message) {
        alert("Please fill all fields!");
        return;
    }

    let params = {
        first_name: fname,
        last_name: lname,
        user_email: email,
        user_message: message
    };

    emailjs.send("service_ilwmgol", "template_dqx1op7", params)
        .then(() => {
            alert("Message sent successfully!");

            // 🧹 Clear all inputs after sending
            document.querySelector('input[name="fname"]').value = "";
            document.querySelector('input[name="lname"]').value = "";
            document.querySelector('input[name="email"]').value = "";
            document.getElementById("inp_message").value = "";
        })
        .catch((err) => {
            console.log(err);
            alert("Failed to send. Please try again.");
        });
});

let inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        input.style.color = 'black';
    });

    input.addEventListener('blur', () => {
        input.style.backgroundColor = 'rgba(22, 52, 78, 0.4)'; // your dissolve shade
        input.style.color = 'white';
    });
});

