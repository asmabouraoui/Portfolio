import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";
import Link from "next/link";
import { env } from "@/env";

const SOCIALS = [
  {
    name: "LinkedIn",
    url: env.NEXT_PUBLIC_LINKEDIN_LINK,
    icon: LuLinkedin,
  },
  {
    name: "GitHub",
    url: env.NEXT_PUBLIC_GITHUB_LINK,
    icon: LuGithub,
  },

];

const Footer = () => {
  return (
    <footer className="container py-8">
      <div className="mb-4 flex justify-center gap-4">
        {SOCIALS.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            <social.icon className="h-6 w-6" />
          </Link>
        ))}
      </div>
      <div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Adly Bibi. All rights
            reserved.
          </p>
          <p className="text-center text-sm text-gray-500">
            Made with ❤️ by{" "}
            <Link
              href="https://AdlyBibi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkgreen-500 hover:underline"
            >
              Adly Bibi
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
