"use client"

import React, { useState } from "react"

import ExampleHeading from "@/components/navigation/example-heading"

const headingText = {
  title: "Bad modal focus order",
  description:
    "Press TAB until the focus is on the Open Modal button. Activate the button with the Space key. The focus will jump to the dialog, but now there is no keyboard trap. By pressing TAB, you will find yourself lost quickly.",
}

export default function BadModalFocus() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-8">
      <ExampleHeading
        title={headingText.title}
        text={headingText.description}
      />
      <button
        onClick={() => setIsOpen(true)}
        className="mx-auto block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:outline-none"
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="w-full max-w-md rounded bg-white p-6 shadow-lg">
            <h2 className="mb-2 text-xl font-bold">Unmanaged Modal</h2>
            <p className="mb-4">
              This modal does not receive focus when opened and does not return
              focus to the trigger button.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:outline-none"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
