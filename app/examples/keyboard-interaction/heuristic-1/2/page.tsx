import React from "react"

import ExampleHeading from "@/components/navigation/example-heading"

const headingText = {
  title: "Bad tab order",
  description:
    "Place the cursor in the Name field. Then press the TAB key and observe how the focus order jumps around. As a user, you don't really know where it will go with each press.",
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
            tabIndex={1}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-medium">
            Name
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded border border-gray-300 p-2"
            tabIndex={4}
          />
        </div>

        <div>
          <label htmlFor="area-code" className="mb-1 block font-medium">
            Phone
          </label>
          <div className={"flex max-w-[300px] gap-4"}>
            <input
              type="text"
              id="area-code"
              name="area code"
              className="w-full rounded border border-gray-300 p-2"
              tabIndex={2}
            />
            <input
              type="text"
              id="first-three"
              name="first three numbers of phone number"
              className="w-full rounded border border-gray-300 p-2"
              tabIndex={5}
            />
            <input
              type="text"
              id="last-four"
              name="last four numbers of phone number"
              className="w-full rounded border border-gray-300 p-2"
              tabIndex={3}
            />
          </div>
        </div>

        <button
          type="submit"
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          tabIndex={4}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
