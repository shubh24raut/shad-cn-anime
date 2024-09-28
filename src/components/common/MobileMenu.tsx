import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import SearchBar from "./SearchBar";

const MobileMenu = () => {
  return (
    <div className="cursor-pointer">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <ThemeToggle />
            </SheetTitle>
            <SheetDescription>
              <SearchBar />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
