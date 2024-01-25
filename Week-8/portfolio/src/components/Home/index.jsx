const Home = () => {
  return (
    <div className="p-8 flex flex-col gap-4 items-center w-screen">
      <h2 className="text-2xl">About Me</h2>
      <img
        src="src/public/abd1.jpeg"
        alt="Profile"
        className="rounded-full w-1/6"
      />
      <div id="description" className="p-4 text-center">
        <p className="p-1">
          Hey! This is Shaik Mohammad Abdullah. You can call me Abdullah 😌
        </p>
        <p className="p-1">
          Software Engineer building products to solve real-world problems and
          trying to build business through it
        </p>
        <p className="p-1">
          Joined tech with the motivation to be useful to the world by building
          useful products that could be used globally
        </p>
        <p className="p-1">
          Inspired by{" "}
          <a href="https://www.youtube.com/watch?v=L7c4wS7T_T8&t=233s">
            Google IO 2021.
          </a>
          (Turning point in life)
        </p>
      </div>
    </div>
  );
};

export default Home;
