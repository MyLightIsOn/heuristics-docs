"use client"

import React, { useEffect, useRef, useState } from "react"

export default function GoodModalFocus() {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  function closeModal() {
    setIsOpen(false)
    if (triggerButtonRef.current) {
      triggerButtonRef.current.focus()
    }
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Modal - Good Focus Management</h1>
      <button
        ref={triggerButtonRef}
        onClick={() => setIsOpen(true)}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            className="w-full max-w-md rounded bg-white p-6 shadow-lg outline-none"
          >
            <h2 className="mb-2 text-xl font-bold">Accessible Modal</h2>
            <p className="mb-4">
              Focus is managed when the modal opens and closes.
            </p>
            <button
              onClick={closeModal}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
