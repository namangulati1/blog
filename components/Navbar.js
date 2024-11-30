// components/Navbar.js
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-button";

const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">NamanBlog</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <div>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </div>
          <div>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </div>
          <div>
            <Link href="/blog" className="hover:text-gray-400">
              Blog
            </Link>
          </div>
          <div>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
          <div>
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Sign Up
            </Button>
          </div>
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <div className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4"><div>Naman Blog</div></SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/" className="hover:text-gray-400">
                      Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-400">
                      About
                    </Link>
                    <Link href="/blog" className="hover:text-gray-400">
                      Blog
                    </Link>
                    <Link href="/contact" className="hover:text-gray-400">
                      Contact
                    </Link>
                    <div>
                      <Button className="mx-1 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant="outline">
                        Sign Up
                      </Button>
                      <ModeToggle />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
