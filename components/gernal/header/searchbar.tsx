import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function Searchbar() {
  return (
    <div className="hidden lg:block max-w-lg mx-5 min-w-96 relative">
      <div className="bg-[#f1f3f5] w-full">
        <Search className="absolute top-0 left-0 h-full w-4 ml-4" />
        <Input
          className="bg-transparent border border-none focus:border-[#228be6] focus:ring-0 focus-within:ring-0 w-full px-10"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
