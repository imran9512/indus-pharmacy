import Link from "next/link";
import Searchbar from "./searchbar";
import CheckOutButton from "./checkout-button";

export default function Header() {
  return (
    <header className="h-16 items-center justify-center border-b hidden lg:flex">
      <div className="px-4 flex items-center justify-between w-full max-w-screen-xl h-full">
        <Link href={"/"}>
          <span className="text-2xl">
            <b>
              MALE <i>SORT</i>
            </b>
          </span>
        </Link>
        <Searchbar className="hidden lg:block" />
        <CheckOutButton />
      </div>
    </header>
  );
}
