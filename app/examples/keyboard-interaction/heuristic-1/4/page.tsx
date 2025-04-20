"use client"

import React, { useState } from "react";

export default function BadModalFocus() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Modal - Poor Focus Management</h1>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                Open Modal
            </button>

            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-2">Unmanaged Modal</h2>
                        <p className="mb-4">
                            This modal does not receive focus when opened and does not return focus to the trigger button.
                        </p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Close Modal
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

