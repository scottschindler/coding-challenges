import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div style={{ height: "100%" }}>
      <h1>yo</h1>
      <button
        onClick={() => {
          router.push("/challenges");
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
