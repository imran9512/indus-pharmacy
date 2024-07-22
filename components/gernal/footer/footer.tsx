import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-3 flex items-center justify-center border-t">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between">
        <Link href={"/terms-and-conditions"} className="lg:text-xl">
          Terms and Conditions
        </Link>
        <Link href={"/privacy-policy"} className="lg:text-xl">
          Privacy Policy
        </Link>
        <Link href={"/about"} className="lg:text-xl">
          About
        </Link>
      </div>
    </footer>
  );
}
