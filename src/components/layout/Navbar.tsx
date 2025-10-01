import Button from "../ui/Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-6 pt-4 xl:pt-8 sm:text-lg font-medium">
      <Button variant="ghost" className="px-12 py-3 xl:py-5.5">
        How It Works{" "}
      </Button>
      <Button className="px-8 py-2 sm:py-4" variant="gradient">
        Buy Salt AI
      </Button>
    </nav>
  );
};

export default Navbar;
