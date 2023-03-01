export default function PaymentDetails() {

    
    //Payment functions
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const makePayment = async (name, email, contact) => {
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }

        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", { method: "POST", body: JSON.stringify({ amount: 5000 }) }).then((t) =>
            t.json()
        );

        // console.log(data,mainData);
        var options = {
            key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
            name: "Jetstar gaming",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "ThankYou for shopping with Us",
            handler: async function (response) {
                alert('Payment complete');
                console.log();
            },
            prefill: {
                name: name,
                email: email,
                contact: contact,
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return( 
        <>
            Helllllo
        </>
    );
}