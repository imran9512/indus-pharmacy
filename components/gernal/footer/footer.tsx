import Link from "next/link";
import SiteLogo from "../site-logo";

export default function Footer() {
  return (
    <footer className="p-3 flex items-center justify-center border-t">
      <div className="max-w-screen-lg mx-auto w-full flex flex-col lg:flex-row gap-3 items-center justify-between">
        <SiteLogo />
        <div className="flex items-center gap-4">
          <Link href={"/terms-and-conditions"} className="text-xs lg:text-base">
            Terms and Conditions
          </Link>
          <Link href={"/privacy-policy"} className="text-xs lg:text-base">
            Privacy Policy
          </Link>
          <Link href={"/about"} className="text-xs lg:text-base">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
