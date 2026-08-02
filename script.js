// Demo OTP
let demoOTP = "123456";

// Send OTP
function sendOTP() {

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;

    if (name == "" || mobile == "") {
        alert("Please enter Name and Mobile Number");
        return;
    }

    if (mobile.length != 10) {
        alert("Enter valid 10 digit Mobile Number");
        return;
    }

    alert("Demo OTP Sent Successfully!\n\nYour OTP is : " + demoOTP);

    document.getElementById("otpBox").style.display = "block";
}

// Verify OTP
function verifyOTP() {

    let otp = document.getElementById("otp").value;

    if (otp == demoOTP) {

        document.getElementById("message").innerHTML =
        "✅ OTP Verified Successfully";

        document.getElementById("message").style.color = "green";

        document.getElementById("invoiceBox").style.display = "block";

    } else {

        document.getElementById("message").innerHTML =
        "❌ Invalid OTP";

        document.getElementById("message").style.color = "red";
    }
}

// Generate Bill
function generateBill() {

    let pizza = Number(document.getElementById("pizza").value) * 200;
    let burger = Number(document.getElementById("burger").value) * 120;
    let sandwich = Number(document.getElementById("sandwich").value) * 100;
    let tea = Number(document.getElementById("tea").value) * 20;
    let coffee = Number(document.getElementById("coffee").value) * 40;
    let cold = Number(document.getElementById("cold").value) * 50;

    let total = pizza + burger + sandwich + tea + coffee + cold;

    let customer = document.getElementById("name").value;

    document.getElementById("bill").innerHTML =
    "Customer : " + customer +
    "<br><br>Total Amount : ₹" + total +
    "<br><br>🎉 Thank You! Visit Again 🎉";
}

// Reset Form
function resetForm() {

    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("otp").value = "";

    document.getElementById("pizza").value = 0;
    document.getElementById("burger").value = 0;
    document.getElementById("sandwich").value = 0;
    document.getElementById("tea").value = 0;
    document.getElementById("coffee").value = 0;
    document.getElementById("cold").value = 0;

    document.getElementById("bill").innerHTML = "";
    document.getElementById("message").innerHTML = "";

    document.getElementById("otpBox").style.display = "none";
    document.getElementById("invoiceBox").style.display = "none";
}