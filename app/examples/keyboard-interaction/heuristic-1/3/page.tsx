"use client"

import React, { useEffect, useRef, useState } from "react"

import ExampleHeading from "@/components/navigation/example-heading"

const headingText = {
  title: "Good modal focus order",
  description:
    "Press TAB until the focus is on the Open Modal button. Activate the button with the Space key. Observe how the focus jumps into the dialog. The focus can not leave the dialog when you continue to press TAB. If you close the dialog the keyboard, the focus will return back to this button. This ensure that you don't get 'lost'.",
}

export default function GoodModalFocus() {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    // Whenever the dialog is open, following logic will be executed.
    if (isOpen) {
      const dialogNode = modalRef.current

      // If the dialogNode reference is null, there's nothing else to do.
      if (!dialogNode) return

      // You're collecting all focusable elements in the dialog.
      const focusableElements = dialogNode.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )

      // Getting the first and last focusable elements.
      // As these variables could be undefined if there are no focusable elements,
      // we're asserting types as HTMLElement | undefined.
      const firstFocusableEl = focusableElements[0] as HTMLElement | undefined
      const lastFocusableEl = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement | undefined

      // Keydown event handler
      function onKeyDown(event: KeyboardEvent) {
        // If the pressed key is 'Tab'
        if (event.key === "Tab") {
          // And the 'Shift' key is also pressed and the current activeElement is the first focusable element
          if (event.shiftKey && document.activeElement === firstFocusableEl) {
            // If the last focusable element exists, focus it and prevent default action.
            if (lastFocusableEl) {
              lastFocusableEl.focus()
              event.preventDefault()
            }
            // If the 'Shift' key is not pressed and the current activeElement is the last focusable element
          } else if (document.activeElement === lastFocusableEl) {
            // If the first focusable element exists, focus it and prevent default action.
            if (firstFocusableEl) {
              firstFocusableEl.focus()
              event.preventDefault()
            }
          }
        }
      }

      // Adding a keydown event listener to the dialogNode
      dialogNode.addEventListener("keydown", onKeyDown)
      // Cleanup: removing the event listener when the isOpen state changes or the component is unmounted.
      return () => dialogNode.removeEventListener("keydown", onKeyDown)
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
      <ExampleHeading
        title={headingText.title}
        text={headingText.description}
      />
      <button
        tabIndex={isOpen ? -1 : undefined}
        ref={triggerButtonRef}
        onClick={() => setIsOpen(true)}
        className="mx-auto block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
            tabIndex={isOpen ? 0 : -1}
            className="w-full max-w-md rounded bg-white p-6 text-black shadow-lg outline-none"
          >
            <h2 className="mb-2 text-xl font-bold">Accessible Modal</h2>
            <p className="mb-4">
              The focus is now trapped in this modal. This is one of the few
              times a keyboard trap is good. It keeps your focus from getting
              lost out there behind this dialog.
            </p>
            <div className={"flex justify-center gap-8"}>
              <button
                onClick={closeModal}
                className="w-full rounded border border-blue-700 bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:border-blue-700 focus:bg-white focus:text-blue-700"
              >
                Random Button
              </button>
              <button
                onClick={closeModal}
                className="w-full rounded border border-blue-700 bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:border-blue-700 focus:bg-white focus:text-blue-700"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
