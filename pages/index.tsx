import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex  flex-col w-full h-screen border items-center justify-center">
      <p className="text-5xl font-bold text-center w-2/3">
        Level up your React and Node skills quickly
      </p>
      <p></p>
      <button
        className=""
        onClick={() => {
          router.push("/challenges");
        }}
      >
        Sign up for Waitlist
      </button>
    </div>
  );
};

export default Home;
