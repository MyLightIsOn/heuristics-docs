"use client"

import React, { useRef, useState, useEffect } from "react";

export default function GoodModalFocus() {
    const [isOpen, setIsOpen] = useState(false);
    const triggerButtonRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.focus();
        }
    }, [isOpen]);

    function closeModal() {
        setIsOpen(false);
        if (triggerButtonRef.current) {
            triggerButtonRef.current.focus();
        }
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Modal - Good Focus Management</h1>
            <button
                ref={triggerButtonRef}
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Open Modal
            </button>

            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <div
                        ref={modalRef}
                        tabIndex="-1"
                        className="bg-white p-6 rounded shadow-lg w-full max-w-md outline-none"
                    >
                        <h2 className="text-xl font-bold mb-2">Accessible Modal</h2>
                        <p className="mb-4">Focus is managed when the modal opens and closes.</p>
                        <button
                            onClick={closeModal}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Close Modal
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
