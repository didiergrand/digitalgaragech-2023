import { useEffect, useState } from "react";
import Link from "next/link";
import { Dialog, Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
// import black logo from public folder
import LogoWhite from "../public/logo-digitalgarage-white.png"; 
import LogoBlack from "../public/logo-digitalgarage-black.png"; 

const themeSwitcher = () => {
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
    document.documentElement.classList.add("dark");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }

  var themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
};

const Header = () => {
  const router = useRouter();
  useEffect(() => {
    themeSwitcher();
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="max-w-7xl mx-auto p-6">
      <nav
        className="flex items-center justify-between xl:px-0"
        aria-label="Global"
      >
        <div id="logo" className="flex grow">
          <a href="/" className="-m-1.5 p-1.5">
            {/* if dark theme display logo black with tailwind.css */}
            {/* else if light theme display logo white with tailwind.css */}
            <Image src={LogoBlack} className="block dark:hidden" alt="DigitalGarage, Didier Grand, Creative Web Developer" width={48} height={48} />
            <Image src={LogoWhite} className="hidden dark:block" alt="DigitalGarage, Didier Grand, Creative Web Developer" width={48} height={48} />


          </a>
        </div>
        <div className="lg:order-last justify-end ml-12">
          <button
            id="theme-toggle"
            type="button"
            className="text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            aria-label="Changer de thème"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex lg:hidden  px-6 order-last">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrez le menu principal"
          >
            <span className="sr-only">Ouvrez le menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 ${router.pathname === "/" ? "active" : ""}`}
          >
            Accueil
          </Link>
          <Link
            href="/portfolio"
            className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 ${router.pathname === "/portfolio" ? "active" : ""}`}
          >
            Web
          </Link>
          <Link
            href="/photo"
            className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 ${router.pathname === "/photo" ? "active" : ""}`}
          >
            Photo
          </Link>
          <Link
            href="/blog"
            className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 ${router.pathname.startsWith("/blog") ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 ${router.pathname === "/about" ? "active" : ""}`}
          >
            À propos
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel id="mobileNav" className="fixed inset-y-0 right-0 z-10 w-full overflow-y-aut px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>

            <Image src={LogoBlack} className="block dark:hidden" alt="DigitalGarage" width={48} height={48} />
            <Image src={LogoWhite} className="hidden dark:block" alt="DigitalGarage" width={48} height={48} />
            </a>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 mr-7"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                >
                  Accueil
                </Link>
                <Link
                  href="/portfolio"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                >
                  Portfolio
                </Link>
                <Link
                  href="/photos"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                >
                  Photos
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                >
                  À propos
                </Link>
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Header;
