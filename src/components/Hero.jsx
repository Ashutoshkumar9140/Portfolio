import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className={`dark:border-zinc-800 border-slate-300/80 bg-slate-200/80
      border-b relative dark:bg-zinc-950 overflow-hidden`}
    >
      <div
        className={`px-5 lg:py-24 mx-auto items-center lg:grid-cols-2
        min-h-screen lg:px-10 py-20 gap-12 grid sm:px-8 max-w-7xl`}
      >
        <div>
          <p
            className="mb-5 dark:text-amber-400 text-indigo-500 text-sm
            uppercase font-semibold tracking-widest"
          >
            Frontend Developer
          </p>

          <h1
            className="font-bold leading-tight sm:text-5xl max-w-3xl
            tracking-tight text-4xl lg:text-6xl"
          >
            Hi, I'm Ashutosh Kumar.
            <span className="block text-slate-500 mt-2 dark:text-zinc-400">
              I build modern web experiences with React.
            </span>
          </h1>

          <p
            className="dark:text-zinc-300 max-w-2xl sm:text-lg mt-7
            text-slate-600 text-base leading-7"
          >
            I enjoy turning ideas into responsive, interactive and user-friendly
            web applications using JavaScript, React and modern frontend tools.
          </p>

          <div className="flex flex-wrap mt-9 gap-4">
            <a
              href="#projects"
              className={`dark:bg-amber-500 gap-2 text-white inline-flex
              dark:hover:bg-amber-400 transition py-3 items-center
              font-semibold bg-indigo-600 rounded-lg px-5 text-sm
              dark:text-zinc-950 hover:bg-indigo-700`}
            >
              View Projects <FiArrowRight size={17} />
            </a>

            <a
              href="#contact"
              className={`text-sm hover:bg-slate-100 border-slate-300
              dark:border-zinc-700 font-semibold transition border
              dark:hover:bg-zinc-900 text-slate-800 dark:text-zinc-100
              py-3 rounded-lg px-5`}
            >
              Contact Me
            </a>

            <a
              href="resume.pdf"
              download="Ashutosh-Kumar-Resume.pdf"
              className={`rounded-lg font-semibold text-indigo-600
              border-indigo-600 transition hover:bg-indigo-50
              dark:border-amber-500 px-5 dark:hover:bg-amber-950/20
              py-3 border items-center dark:text-amber-400
              inline-flex text-sm gap-2`}
            >
              <FiDownload size={17} />
              Download Resume
            </a>
          </div>

          <div className="flex-wrap flex gap-5 items-center mt-8">
            <a
              href="https://github.com/Ashutoshkumar9140"
              target="_blank"
              rel="noreferrer"
              className={`font-medium dark:hover:text-amber-400 transition
              hover:text-indigo-500 text-slate-500 dark:text-zinc-400 text-sm`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ashutosh-kumar-1b047a236"
              target="_blank"
              rel="noreferrer"
              className={`hover:text-indigo-500 font-medium transition
              text-slate-500 items-center dark:hover:text-amber-400
              dark:text-zinc-400 gap-2 text-sm inline-flex`}
            >
              <FaLinkedinIn size={17} />
              LinkedIn
            </a>

            <a
              href="mailto:ashutoshraj.9628732@gmail.com"
              className={`hover:text-indigo-500 font-medium transition
              text-slate-500 items-center dark:hover:text-amber-400
              dark:text-zinc-400 gap-2 text-sm inline-flex`}
            >
              <FiMail size={17} />
              Email
            </a>
          </div>
        </div>

        <div className="justify-center flex lg:justify-end">
          <div
            className={`border dark:border-zinc-700 p-2 border-slate-300
            relative bg-slate-50 dark:bg-zinc-900 shadow-slate-400/20
            overflow-hidden sm:p-3 shadow-2xl rounded-3xl
            dark:shadow-black/40`}
          >
            <img
              src="ashu_pic.jpeg"
              alt="Ashutosh Kumar"
              className="rounded-2xl w-64 lg:w-[25rem] sm:h-[28rem]
              sm:w-[22rem] lg:h-[32rem] h-80 object-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
