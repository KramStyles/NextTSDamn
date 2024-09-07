import CountryLookUp from "@/components/CountryLookUp";

function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-gray-100 w-full">
      <div className="border-b px-8 py-4">
      <CountryLookUp />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-3 sm:space-y-0 space-y-7">
        <ul className="flex items-center space-x-6">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Advertising</li>
            <li className="hover:underline cursor-pointer">Business</li>
            <li className="hover:underline cursor-pointer">How Search works</li>
        </ul>
        <ul className="flex items-center space-x-6">
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Terms</li>
            <li className="hover:underline cursor-pointer">Settings</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
