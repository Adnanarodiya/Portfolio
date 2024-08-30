import { HoverEffect } from "../components/aceternity/cardHoverEffect";

const projects = [
  {
    image: "/IssacLord.png",
    title: "Issac Lord",
    description: "Currently working on developing a user-friendly e-commerce platform for Isaac Lord, featuring product browsing, advanced search, and seamless shopping cart functionality using modern web technologies",
    link: "https://isaac-puce.vercel.app/",
    type: "running",
    use: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cpanel/cpanel-original.svg",

    ],
  },
  {
    image: "/QuikMart.png",
    title: "QuikMart",
    description: "Built a dynamic e-commerce website for seamless online shopping. Utilizes Supabase for real-time database management. All data is dynamically updated.",
    link: "https://quik-mart.vercel.app/",
    type: "running",
    use: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    ],
  },
  {
    image: "/TMX.png",
    title: "TMX",
    description: "A front-end design i created for practical interview",
    link: "https://tmx-two.vercel.app/",
    type: "running",
    use: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
  },
  {
    image: "/dojoHelpDesk.png",
    title: "Dojo HelpDesk",
    description:
      "Develop a simple ticket generator website where users can create tickets and assign priorities such as high, low, or medium.",
    link: "https://dojo-helpdesk-nine.vercel.app/",
    type: "Paused",
    use: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    ],
  },
  {
    image: "/todoApp.png",
    title: "Todo",
    description:
      "Create a basic to-do website that allows users to add, delete, and update tasks, as well as mark them as completed with a simple click.",
    link: "https://todo.adnans.me/",
    type: "running",
    use: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
  },
  {
    image: "/blogApp.png",
    title: "Blog",
    description:
      "Develop a simple blogging platform where users can write their own blogs and also read blogs written by other users.",
    link: "https://blog.adnans.me/",
    type: "running",
    use: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    ],
  },
  {
    image: "/guessMyNumber.png",
    title: "Guess My Number",
    description:
      "This is a game called 'Guess My Number' where the player guesses a number between 1 and 20. ",
    link: "https://guess-my-number-game-beryl.vercel.app/",
    type: "running",
    use: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
  },
  {
    image: "/growThan.png",
    title: "growThan",
    description:
      "I created this simple website showcasing digital growth through affiliate marketing using Figma's design.",
    link: "https://grow-than.vercel.app/",
    type: "running",
    use: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
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
