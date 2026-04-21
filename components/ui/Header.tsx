import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const nav_menu = [
  {
    title: "Меню",
    link: "/menu",
  },
  {
    title: "Шефы",
    link: "/shefs",
  },
  {
    title: "Программа лояльности",
    link: "/loyalty",
  },
  {
    title: "События",
    link: "/event",
  },
  {
    title: "Медиа",
    link: "/media",
  },
  {
    title: "Контакты",
    link: "/contacts",
  },
];

const Header = () => {
  return (
    <header className="max-w-360 mx-auto flex justify-between py-4 px-20">
      <div className=" flex gap-7 items-center">
        <Link href={"/"} className="">
          <Image src={"/logo.svg"} alt="" width={158} height={44} />
        </Link>
        <div className="flex">
          {nav_menu.map((i) => (
            <Link href={i.link} key={i.title} className="px-4">
              {i.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-7 items-center">
        <div className="text-(--color-accent)">RU</div>
        <Button text="Забронировать" />
      </div>
    </header>
  );
};

export default Header;
