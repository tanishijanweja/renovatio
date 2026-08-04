import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export type SocialLink = {
  name: string;
  href: string;
  icon: IconType;
  hoverClass: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/renovatiointerior",
    icon: FaFacebook,
    hoverClass: "hover:text-[#1877F2]",
  },
  {
    name: "Behance",
    href: "https://www.behance.net/nareshvijh",
    icon: FaBehance,
    hoverClass: "hover:text-[#1769FF]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCnFsX6PgwvIlrOVCNEW_EWQ",
    icon: FaYoutube,
    hoverClass: "hover:text-[#FF0000]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/naresh_vijh",
    icon: FaInstagram,
    hoverClass: "hover:text-[#E1306C]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/naresh-vijh-35290014/",
    icon: FaLinkedinIn,
    hoverClass: "hover:text-[#0A66C2]",
  },
];
