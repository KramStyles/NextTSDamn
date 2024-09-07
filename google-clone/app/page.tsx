import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HomeHeader />
      <div className="flex flex-col items-center mt-32">
        <Image
          alt="Google logo"
          src="/google-logo.png"
          width={300}
          height={100}
        />
        <HomeSearch />
      </div>
    </div>
  );
}
