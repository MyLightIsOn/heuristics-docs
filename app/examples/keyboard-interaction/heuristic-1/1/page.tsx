import React from "react"

import ExampleHeading from "@/components/navigation/example-heading"

const headingText = {
  title: "Good Tabbing Order - Accessible Form",
  description:
    "Press the TAB key and observe the path and order of the focus. This is the default, and most logical path for the focus to travel.",
}

export default function Page() {
  return (
    <div className="p-8">
      <ExampleHeading
        title={headingText.title}
        text={headingText.description}
      />
      <form className="mx-auto max-w-xl space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded border border-gray-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded border border-gray-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="country" className="mb-1 block font-medium">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="w-full rounded border border-gray-300 p-2"
          >
            <option value="">Please choose</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block font-medium">
            Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            className="w-full rounded border border-gray-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
