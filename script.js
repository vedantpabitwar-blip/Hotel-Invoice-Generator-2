// Demo OTP
let demoOTP = "123456";

// Your UPI ID
// IMPORTANT: Replace this with your own UPI ID
let upiID = "yourname@upi";


// -----------------------------
// Send OTP
// -----------------------------
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

    alert(
        "Demo OTP Sent Successfully!\n\nYour OTP is : "
        + demoOTP
    );

    document.getElementById("otpBox").style.display = "block";
}


// -----------------------------
// Verify OTP
// -----------------------------
function verifyOTP() {

    let otp = document.getElementById("otp").value;

    if (otp == demoOTP) {

        document.getElementById("message").innerHTML =
            "✅ OTP Verified Successfully";

        document.getElementById("message").style.color =
            "green";

        document.getElementById("invoiceBox").style.display =
            "block";

    } else {

        document.getElementById("message").innerHTML =
            "❌ Invalid OTP";

        document.getElementById("message").style.color =
            "red";
    }
}


// -----------------------------
// Generate Bill
// -----------------------------
function generateBill() {

    let pizza =
        Number(document.getElementById("pizza").value) * 200;

    let burger =
        Number(document.getElementById("burger").value) * 120;

    let sandwich =
        Number(document.getElementById("sandwich").value) * 100;

    let tea =
        Number(document.getElementById("tea").value) * 20;

    let coffee =
        Number(document.getElementById("coffee").value) * 40;

    let cold =
        Number(document.getElementById("cold").value) * 50;


    let total =
        pizza +
        burger +
        sandwich +
        tea +
        coffee +
        cold;


    // Check if any item is selected
    if (total == 0) {

        alert("Please select at least one food item");
        return;
    }


    let customer =
        document.getElementById("name").value;


    // Display Bill
    document.getElementById("bill").innerHTML =

        "<div class='invoice'>" +

        "<h2>🧾 Hotel Invoice</h2>" +

        "<p><b>Customer:</b> " +
        customer +
        "</p>" +

        "<p><b>Pizza:</b> ₹" +
        pizza +
        "</p>" +

        "<p><b>Burger:</b> ₹" +
        burger +
        "</p>" +

        "<p><b>Sandwich:</b> ₹" +
        sandwich +
        "</p>" +

        "<p><b>Tea:</b> ₹" +
        tea +
        "</p>" +

        "<p><b>Coffee:</b> ₹" +
        coffee +
        "</p>" +

        "<p><b>Cold Drink:</b> ₹" +
        cold +
        "</p>" +

        "<hr>" +

        "<h3>Total Amount: ₹" +
        total +
        "</h3>" +

        "<p>🎉 Thank You! Visit Again 🎉</p>" +

        "</div>";


    // Show payment section
    document.getElementById("paymentBox").style.display =
        "block";


    document.getElementById("payAmount").innerHTML =
        "Pay Amount: ₹" + total;


    // Generate QR Code
    generateQR(total);
}


// -----------------------------
// Generate UPI QR Code
// -----------------------------
function generateQR(amount) {

    // Clear old QR
    document.getElementById("qrcode").innerHTML = "";


    // UPI Payment Link
    let upiLink =
        "upi://pay" +
        "?pa=" + encodeURIComponent(upiID) +
        "&pn=" + encodeURIComponent("Hotel Invoice") +
        "&am=" + amount +
        "&cu=INR";


    new QRCode(document.getElementById("qrcode"), {

        text: upiLink,

        width: 220,

        height: 220

    });
}


// -----------------------------
// Open UPI App
// -----------------------------
function payUsingUPI() {

    let totalText =
        document.getElementById("payAmount").innerText;


    let amount =
        totalText.replace("Pay Amount: ₹", "");


    let upiLink =
        "upi://pay" +
        "?pa=" + encodeURIComponent(upiID) +
        "&pn=" + encodeURIComponent("Hotel Invoice") +
        "&am=" + amount +
        "&cu=INR";


    window.location.href = upiLink;
}


// -----------------------------
// Payment Success Demo
// -----------------------------
function paymentSuccess() {

    document.getElementById("paymentMessage").innerHTML =
        "✅ Payment Successful! Thank You.";

    document.getElementById("paymentMessage").style.color =
        "green";
}


// -----------------------------
// Reset Form
// -----------------------------
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

    document.getElementById("paymentMessage").innerHTML = "";

    document.getElementById("qrcode").innerHTML = "";


    document.getElementById("otpBox").style.display =
        "none";

    document.getElementById("invoiceBox").style.display =
        "none";

    document.getElementById("paymentBox").style.display =
        "none";
}