import { HoverEffect } from "../components/aceternity/cardHoverEffect";

export const projects = [
  {
    image: "/QuikMart.png",
    title: "QuikMart",
    description: "A front-end simulation of a real-world e-commerce app",
    link: "https://quik-mart.vercel.app/",
  },
  {
    image: "/dojoHelpDesk.png",
    title: "Dojo HelpDesk",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    image: "/todoApp.png",
    title: "Todo",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    image: "/blogApp.png",
    title: "Blog",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    image: "/guessMyNumber.png",
    title: "Guess My Number",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    image: "/growThan.png",
    title: "growThan",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
