import Image from "next/image";

function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto w-[90%] lg:w-[70%] text-white text-center lg:text-left mt-20 mb-20 gap-10">
        {/* Profile Image */}
        <Image
          src="/m1.jpg"
          alt="profile"
          width={350}
          height={350}
          className="rounded-xl border-4 border-white object-cover mx-auto lg:mx-0"
        />

        {/* About Text */}
        <div className="lg:ml-8">
          <h1 className="text-3xl sm:text-4xl font-bold mt-6 lg:mt-0 mb-6">
            About Me
          </h1>
          <p className="text-base sm:text-lg font-medium leading-relaxed max-w-xl">
            👨‍💻 Hey there! I’m{" "}
            <span className="font-semibold">Mohamed Gamal</span>, a curious mind
            and passionate
            <span className="font-semibold"> Full-Stack Developer</span> who
            loves turning ideas into interactive digital experiences. I craft
            smooth, dynamic front-ends with
            <span className="font-semibold"> React</span> and{" "}
            <span className="font-semibold">Next.js</span>, and power them up
            with strong, scalable back-ends using{" "}
            <span className="font-semibold">Spring Boot</span>. For me, coding
            isn’t just about writing lines — it’s about creating something
            meaningful, elegant, and alive on the web.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
