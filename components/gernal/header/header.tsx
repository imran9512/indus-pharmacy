import Searchbar from "./searchbar";
import CheckOutButton from "./checkout-button";
import SiteLogo from "../site-logo";

export default function Header() {
  return (
    <header className="h-16 items-center justify-center border-b flex">
      <div className="px-4 flex items-center justify-between w-full max-w-screen-xl h-full">
        <SiteLogo />
        <Searchbar className="hidden lg:block" />
        <CheckOutButton className="hidden lg:flex" />
      </div>
    </header>
  );
}
