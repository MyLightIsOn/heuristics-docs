import React from "react";

export default function Page() {
    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Good Tabbing Order - Accessible Form</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="country" className="block mb-1 font-medium">Country</label>
                    <select
                        id="country"
                        name="country"
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Please choose</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
