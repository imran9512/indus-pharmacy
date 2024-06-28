import { Input } from "@/components/ui/input";
export default function Searchbar() {
  return (
    <div className="hidden lg:block max-w-lg mx-5">
      <div className="bg-[#f1f3f5]">
        <Input
          className="bg-transparent border border-none focus:border-[#228be6] focus:ring-0 focus-within:ring-0"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
