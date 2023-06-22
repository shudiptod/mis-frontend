import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <div className="justify-self-start w-[225px] py-2 bg-sidebar h-full bg-opacity">
      <Link href="/">
        <div className="w-[140px] h-[60px] relative mx-auto">
          <Image src="/images/logo-large.svg" alt="institution logo" fill />
        </div>
      </Link>
    </div>
  );
};

export default NavLogo;
