import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <RxHamburgerMenu className="sm:hidden text-[24px]" />
          <ul className="gap-6 hidden sm:flex">
            <li className="navbar__link">
              <Link className="relative" href="/">
                Home
              </Link>
            </li>
            <li className="navbar__link">
              <Link className="relative" href="/about-us">
                About Us
              </Link>
            </li>
            <li className="navbar__link">
              <Link className="relative" href="/admission">
                Admission
              </Link>
            </li>
            <li className="navbar__link">
              <Link className="relative" href="/course">
                Course
              </Link>
            </li>
            <li className="navbar__link">
              <Link className="relative" href="/infrastructure">
                Infrastructure
              </Link>
            </li>
            <li className="navbar__link">
              <Link className="relative" href="/faculty">
                Faculty
              </Link>
            </li>
            <li className="navbar__link">
              <Link className="relative" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
