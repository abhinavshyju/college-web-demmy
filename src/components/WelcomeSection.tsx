import React from "react";

const WelcomeSection: React.FC = () => {
  return (
    <div className="relative bg-white">
      <div className="hidden grid-cols-4 absolute top-0 left-0 w-full h-full md:grid">
        <div className="col-span-1"></div>
        <div className="bg-gradient-to-r from-transparent via-white to-white col-span-2"></div>
      </div>
      <div className="hidden md:grid grid-cols-5 w-full">
        <img
          src="/college.jpg"
          alt=""
          className="aspect-video col-span-3 max-h-[500px] w-full object-cover"
        />
      </div>
      <div className="mt-4 md:absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="grid md:grid-cols-2 max-w-7xl">
          <div className="col-start-2 px-8">
            <h1 className="font-bold md:text-xl">Welcome to</h1>
            <h2 className="font-semibold text-xl md:text-2xl border-b-2 border-amber-400 pb-4">
              College of Applied Science, Thamarassery
            </h2>
            <p className="mt-6 text-sm md:text-lg">
              Welcome to College of Applied Science, Thamarassery, where we
              empower women to become innovative, compassionate leaders. With a
              rich history of academic excellence and a commitment to social
              responsibility, we provide a vibrant and inclusive community for
              our students. Explore our programs, events, and resources to
              discover how we can help you achieve your academic and personal
              goals.
            </p>
            <button className="bg-primary text-white px-4 py-2 hover:border border-primary hover:bg-white hover:text-primary mt-8">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
