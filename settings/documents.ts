import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "Basic Setup",
    href: "/introduction",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Introduction",
    href: "/keyboard-interaction",
    heading: "Keyboard Interaction",
  },
  {
    title: "Heuristics",
    href: "/keyboard-interaction",
    items: [
      {
        title: "Is tabbing order predictable, logical, and intuitive?",
        href: "/heuristic-1",
      },
      {
        title:
          "Is the focus indicator clearly visible when active elements receive focus?",
        href: "/heuristic-2",
      },
      {
        title:
          "Are buttons, links, and other CTAs designed and implemented to consider both hover and focus states?",
        href: "/heuristic-3",
      },
    ],
  },
]
