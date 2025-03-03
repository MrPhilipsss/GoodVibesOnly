import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/assets/IMG_1151.jpeg"
              alt="Good Vibes Only Logo"
              className="h-12 w-12 rounded-full"
            />
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
                  import('@/lib/scroll-utils').then(({ smoothScrollTo }) => {
                    smoothScrollTo(item.href, 1500);
                  });
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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={`#${item.href}`}
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        // Import the close function from Sheet context
                        const sheet = document.querySelector('[data-state="open"]');
                        if (sheet) {
                          // Find the close button and click it
                          const closeButton = sheet.querySelector('[data-radix-collection-item]');
                          if (closeButton instanceof HTMLElement) {
                            closeButton.click();
                          }
                        }
                        // Then scroll to the section
                        import('@/lib/scroll-utils').then(({ smoothScrollTo }) => {
                          smoothScrollTo(item.href, 1500);
                        });
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button
                    className="w-full"
                    onClick={() => window.open("https://booksy.com", "_blank")}
                  >
                    Book Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}