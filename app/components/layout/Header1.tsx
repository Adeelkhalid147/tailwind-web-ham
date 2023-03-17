import logo from "/public/newlogo.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";

function Header() {
  return (
    <Wrapper>
      {/* // flex box k andr justify horizontal aligment k liye use hta h or item item vertical alignment k liye use hta h */}
      <header className="flex justify-between  mx-auto bg-white sticky top-0 py-4 items-center">
        <div>
          <Image src={logo} alt="panaverce dao" width={100} height={100} />
        </div>
        <ul className="flex space-x-4 font-medium space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Courses </Link>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
}

export default Header;
