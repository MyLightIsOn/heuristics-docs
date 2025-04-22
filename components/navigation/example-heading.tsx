"use client"

import React from "react"
import { usePathname } from "next/navigation"

import PageBreadcrumb from "@/components/navigation/pagebreadcrumb"

function ExampleHeading({ title, text }: { title: string; text: string }) {
  const pathname = usePathname()
  const pathArray = pathname.split("/")
  const breadcrumbs = [pathArray[2], pathArray[3], title]

  return (
    <div>
      <PageBreadcrumb paths={breadcrumbs} />
      <div className={"mx-auto mt-4 mb-8 max-w-xl rounded p-4 text-sm"}>
        <h1 className="mb-8 text-2xl font-bold">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ExampleHeading
