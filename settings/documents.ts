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
    href: "/navigation",
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
          "Are all calls-to-action built to fully function with keyboard and touch in addition to the mouse?",
        href: "/heuristic-3",
      },
      {
        title: "Are we avoiding keyboard traps?",
        href: "/heuristic-4",
      },
      {
        title:
          "Are adjacent links pointing to unique locations combined into a single calls-to-action?",
        href: "/heuristic-5",
      },
      {
        title:
          "Are users able to dismiss newly displayed content without moving their mouse or shifting focus?",
        href: "/heuristic-6",
      },
      {
        title: "Is there a skip-to-main-content link provided?",
        href: "/heuristic-7",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Introduction",
    href: "/navigation",
    heading: "Meaningful Content",
  },
  {
    title: "Heuristics",
    href: "/meaningful-content",
    items: [
      {
        title:
          "Are recurring navigation patterns and functionalities presented and labeled consistently throughout the system?",
        href: "/heuristic-1",
      },
      {
        title: "Are form labels meaningful?",
        href: "/heuristic-2",
      },
      {
        title: "Are we avoiding keyboard traps?",
        href: "/heuristic-3",
      },
      {
        title: "Is real text used rather than images of text?",
        href: "/heuristic-4",
      },
      {
        title: "Are form labels visible and persistent?",
        href: "/heuristic-5",
      },
      {
        title: "Are errors described in text?",
        href: "/heuristic-6",
      },
      {
        title: "Do form controls have visible meaningful text labels?",
        href: "/heuristic-7",
      },
    ],
  },
]
