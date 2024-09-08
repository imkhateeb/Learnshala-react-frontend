import { TopCourses } from "../components/home";
import { Hero } from "../components/home";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Hero />
      <TopCourses />
    </div>
  );
};

export default Home;
