import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-primary rounded-[50px] h-[85vh] flex items-center justify-center w-[90%] max-md:w-[95%] mx-auto">
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center animate-slight-up">
        <h1 className="responsive-heading text-white text-center px-5">
          Learn Like Anything.
        </h1>
        <p className="responsive-para text-center text-white px-5">
          A one stop solution for learning, growing and fulfilling the
          aspirations.
        </p>
        {/* CTA's */}
        <div className="flex items-center gap-5 flex items-center justify-center">
          {/* Primary Button */}
          <button className="responsive-para py-3 px-5 bg-white text-tertiary rounded-full hover:shadow-lg border-[2px] border-white hover:bg-primary hover:text-primary transition-all duration-300 ease-in-out">
            Enroll Now
          </button>
          {/* Secondary Button */}
          <Link
            to={"#top-courses"}
            className="responsive-para py-3 px-5 hover:bg-white hover:text-tertiary rounded-full hover:shadow-lg border-[2px] border-white bg-primary text-primary transition-all duration-300 ease-in-out"
          >
            Top Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
