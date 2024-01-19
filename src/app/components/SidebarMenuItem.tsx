"use client"
import Link from "next/link";
import style from "./SidebarMenuItem.module.css"
import { usePathname } from "next/navigation";

interface SidebarMenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const SidebarMenuItem = ({
  path,
  icon,
  subtitle,
  title,
}: SidebarMenuItemProps) => {

  const pathName = usePathname()

  return (
    <>
      <Link
        href={path}
        className={`${style.link} ${(pathName === path) ? style.active : style.no_active}  `}
      >
        <div>{icon}</div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">
            {title}
          </span>
          <span className="text-sm text-white/50 md:block">
            {subtitle}
          </span>
        </div>
      </Link>
    </>
  );
};
