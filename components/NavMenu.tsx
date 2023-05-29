
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignOutButton } from "./buttons";
import AuthCheck from "./AuthCheck";

export default function NavMenu() {
  return (
    <nav className="bg-[#1d4ed8] py-6">
      <div className="container">
        <div className="flex text-white justify-between items-center ">
          <Link href={"/"}>
            <Image 
              src="/logo.svg"
              width={216}
              height={30}
              alt="Nextspace Logo"
            />
          </Link>
          <ul className="flex items-center">
            {links.map((link, i) => {
              return(
                <li className="flex items-center px-2" key={link.url}>
                  <Link href={`/${link.url}`}>{link.text}</Link>
                </li>
              )
            })}
            <li>
            <SignInButton />
            </li>
            <li>
              <AuthCheck>
                <SignOutButton />
              </AuthCheck>
          
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

const links = [{
  "url": "about",
  "text": "About"
},
{
  "url": "blog",
  "text": "Blog"
},
{
  "url": "users",
  "text": "Users"
}]