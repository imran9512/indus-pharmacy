import Link from "next/link";
import Searchbar from "./searchbar";

export default function Header() {
  return (
    <header className="h-14 flex items-center justify-center border-b">
      <div className="px-2 flex items-center justify-between w-full max-w-screen-2xl">
        <Link href={"/"}>
          <span>INDUS</span>
          <span>PHARMACY</span>
        </Link>
        <Searchbar />
      </div>
    </header>
  );
}
