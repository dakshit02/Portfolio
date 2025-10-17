import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_n1yv74h",  // Replace with your EmailJS Service ID
                "template_965zzzm",  // Replace with your EmailJS Template ID
                form.current,
                "PtDlJ5NuG7uJ4r5X1"  // Replace with your EmailJS Public Key
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset(); // Reset form fields after sending
                    toast.success("Message sent successfully! ✅", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                },
                (error) => {
                    console.error("Error sending message:", error);
                    toast.error("Failed to send message. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                }
            );
    };
    return (

        < div >
            {/* Toast Container */}
            < ToastContainer />

            <div className="text-amber-50 flex flex-col mt-40 gap-15 relative items-center  bg-black z-60 p-20">
                <div className="flex flex-col gap-8 items-center" >
                    <div className="skills text-4xl font-bold">Contact</div>
                    <div className="text-3xl font-extrabold absolute top-25  text-purple-600">________</div>
                    <div className="font-bold text-lg text-gray-400 text-center">I’d love to hear from you—reach out for any opportunities or questions!</div>
                </div>

                {/* Contact Form */}
                <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
                    <h3 className="text-xl font-semibold text-white text-center">
                        Connect With Me <span className="ml-1">🚀</span>
                    </h3>

                    <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                        />
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required
                            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                        />

                        {/* Send Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover: cursor-pointer opacity-90 transition"
                        >
                            Send
                        </button>
                    </form>

                </div>
                <Footer />
            </div>



        </div >
    )

}
export default Contact
