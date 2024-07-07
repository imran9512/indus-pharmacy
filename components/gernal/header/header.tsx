import Link from "next/link";
import Searchbar from "./searchbar";
import CheckOutButton from "./checkout-button";

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-center border-b">
      <div className="px-4 flex items-center justify-between w-full max-w-screen-xl h-full">
        <Link href={"/"}>
          <span>INDUS</span>
          <span>PHARMACY</span>
        </Link>
        <Searchbar className="hidden lg:block" />
        <CheckOutButton />
      </div>
    </header>
  );
}
