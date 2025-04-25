import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hafiz Naufal Rahman",
  initials: "HR",
  location: "South Jakarta, Indonesia 🇮🇩",
  locationLink: "",
  about:
    "Contribute to society through mobile platform 📱",
  summary: (
    <>
      Mobile-Focused Software Engineer specializing in building high-performance, reliable, scalable, and pixel-perfect applications.🧑🏻‍💻
      
      Dedicated to solving problems with a domain-driven approach to ensure optimal solutions.💡
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/35401886",
  personalWebsiteUrl: "",
  contact: {
    email: "hafiznaufalr@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hafiznaufalr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hafiznaufalr/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Bina Nusantara University",
      degree: "Bachelor's Degree in Information Systems",
      start: "2020",
      end: "2024",
    }
  ],
  work: [
    {
      company: "Gojek",
      link: "https://www.gojek.com/en-id",
      badges: ["Swift", "Kotlin", "Problem Solving", "System Design"],
      title: "Software Engineer(L2)",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Gojek is an on-demand app that offers multiple solutions for users daily needs.
          Working on <b>Transport - Revenue & Growth Pod</b>, Handle anything related to money (pricing, payment, voucher, tipping, upsell) in Ride-Hailing Scope (GoCar, GoRide).
        </>
      ),
    },
    {
      company: "Bareksa",
      link: "https://www.bareksa.com/",
      badges: [
        "Kotlin", "Android Development", "Firebase", "Appsflyer", "MoEngage"
      ],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Bareksa is a pioneer investment application in Indonesia that offers a wide range of investment products, including mutual funds, government bonds, and gold.
          <ul className="list-inside list-disc">
            <li>
              Setup <b>A/B testing experiment</b> to help stakeholders define our user needs.
            </li>
            <li>
              Revamp <b>Super App project</b> (core pages).
            </li>
            <li>
              Develop, maintaining, and apply <b>Design System component</b> in core pages.
            </li>
            <li>
              Improve <b>security & experiences</b> update Bank Account Flow.
            </li>
            <li>
              Help user know the apps by revamping <b>Information Center</b> (FAQ, tutorial, report, live chat).
            </li>
            <li>
              Utilize 3rd party tools to improve push <b>Notification & Inbox</b> experiences.
            </li>
            <li>
              Boost AUM & transaction by develop & maintaining <b>Loyalty Program</b> feature.
            </li>
            <li>
              ⁠Help user generate the tax deduction report by develop <b>Tax Report</b> feature.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Qasir",
      link: "https://www.qasir.id/",
      badges: ["Kotlin", "Android Development", "Firebase", "Appsflyer"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description: (
        <>
          Qasir is a SaaS company that provides point-of-sale solutions to help SMEs manage their financial transactions, equipped with premium features to support business growth.
          <ul className="list-inside list-disc">
            <li>
              Migrate attendance & automated sales report from single feature to Pro Subscription
            </li>
            <li>
              Maintain app & registration onboarding & set event tracker, time tracker to track user pain problem.
            </li>
            <li>
              Boost revenue from develop & maintaining <b>Bundling Package</b> premium feature.
            </li>
            <li>
              Improve <b>Cash Recap</b> feature experiences.
            </li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    "Kotlin",
    "Swift",
    "Java",
    "Mobile Development",
    "Problem Solving",
    "System Design",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
