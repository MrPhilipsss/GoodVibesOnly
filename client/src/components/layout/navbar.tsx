import { useState, useEffect } from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "Staff", href: "staff" },
  { name: "Gallery", href: "gallery" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false); // Close mobile menu

    // Use dynamic import for the scroll utility
    setTimeout(() => {
      import('@/lib/scroll-utils').then(({ smoothScrollTo }) => {
        smoothScrollTo(href, 1500);
      });
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/gvo-logo-navbar.png" alt="GVO Logo" className="h-8" /> {/* Replaced logo */}
          <span className="ml-2 text-xl font-bold font-toma">Good Vibes Only</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
          <Button onClick={() => window.open("https://booksy.com", "_blank")}>
            Book Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetTitle>Menu</SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <Button
                  className="w-full"
                  onClick={() => window.open("https://booksy.com/pl-pl/dl/show-business/232302", "_blank")}
                >
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}