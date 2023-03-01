export default function UserDetails() {

    return (
        <><form method="post" action={`/api/consultation/createConsultation`}>
            <div className="mb-6">
                <input
                    type="text"
                    required
                    name="name"
                    placeholder="Your Name"
                    className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                />
            </div>
            <div className="mb-6">
                <input
                    type="email"
                    required
                    name="email"
                    placeholder="Your Email"
                    className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                />
            </div>
            <div className="mb-6">

                <input
                    type="tel"
                    required
                    name="tel"
                    placeholder="Your Phone"
                    className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                />
            </div>
            <div className="mb-6">
                <textarea
                    rows="6"
                    required
                    name="text"
                    placeholder="Your Message"
                    className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            resize-none
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className="
                            transition
                            w-full
                            text-black
                            bg-primary
                            rounded
                            border border-primary
                            p-3
                            hover:bg-opacity-90
                            hover:border-black
                            "
                >
                    Send Message
                </button>
            </div>
        </form>
        </>
    );
}