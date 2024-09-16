import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/diegofelix",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/diegoflx/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/diegofelix",
  },
  {
    icon: <FaTwitter />,
    path: "https://twitter.com/diegofelix",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
