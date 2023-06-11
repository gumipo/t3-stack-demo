import { type NextPage } from "next";
import { TweetForm } from "~/components/TweetForm";

const Home: NextPage = () => {
  return (
    <div>
      <header className="bg-white static top-0 z-10 border-b pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Hello</h1>
      </header>
      <TweetForm />
    </div>
  );
};

export default Home;
