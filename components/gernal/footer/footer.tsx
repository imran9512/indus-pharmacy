import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-3 flex items-center justify-center border-t">
      <div className="max-w-screen-xl w-full flex items-center justify-between">
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
    </footer>
  );
}
