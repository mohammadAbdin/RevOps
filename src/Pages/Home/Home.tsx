import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import useGetTokens from "../../Hooks/UseGetTokens";
import Medal from "../../assets/images/medal.tsx";
import SaveTime from "../../assets/images/saveTime.tsx";
import PersonWith3Stars from "../../assets/images/personWith3Stars.tsx";
import CheckIcon from "../../assets/images/checkIcon.tsx";
const Home: React.FC = () => {
  const { setIsLogedIn, setUser } = useContext(UserContext);
  useGetTokens(setIsLogedIn, setUser);
  const questions = [
    "Are there potential problems with the developer's approach? Does the approach make sense?",
    "Are there any security vulnerabilities written in the code?",
    "Is there a way to do this faster or better?",
    "Would you want to be responsible for changes to this code? What would you do differently?",
    "Does this code follow the best practices for this language/framework/library?",
    "Can the code be easily maintained?",
  ];
  return (
    <div className="w-full home ">
      <div className="mt-8 flex flex-col xl:p-16 xl:pt-2 p-2 gap-8">
        <h2 className="font-bold text-4xl font-raleway text-gray-900">
          What is code review?
        </h2>
        <p className="font-open-sans font-normal text-gray-600 text-xl">
          Code review happens when another developer goes through your or your
          team's code line-by-line and provides constructive, helpful feedback.
          Code review saves time and effort by ensuring code quality up-front,
          rather than waiting until issues are discovered in production. It’s an
          essential part of the day-to-day lives of many professional software
          developers and data scientists.
        </p>

        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-8">
          <div className="topic-block w-3/4 lg:w-1/3">
            <div className="img-block flex justify-center items-center ml-16 lg:ml-10 xl:ml-20">
              <Medal />
            </div>
            <h4 className="font-bold text-2xl font-raleway text-gray-800">
              Ship high quality code
            </h4>
            <p className="font-open-sans font-normal text-lg text-gray-600">
              Ensure that you ship high quality and bug-free code every time.
            </p>
          </div>

          <div className="topic-block w-3/4 lg:w-1/3">
            <div className="img-block flex justify-center items-center ml-16 lg:ml-10 xl:ml-20">
              <SaveTime />
            </div>
            <h4 className="font-bold text-2xl font-raleway text-gray-800">
              Save time
            </h4>
            <p className="font-open-sans font-normal text-lg text-gray-600">
              Catch the issues in your code early on by bringing on another pair
              of eyes. Don't wait until they cause problems in production.
            </p>
          </div>

          <div className="topic-block w-3/4 lg:w-1/3">
            <div className="img-block flex justify-center items-center ml-16 lg:ml-10 xl:ml-20">
              <PersonWith3Stars />
            </div>
            <h4 className="font-bold text-2xl font-raleway text-gray-800">
              Reviewed by experts
            </h4>
            <p className="font-open-sans font-normal text-gray-600 text-lg">
              Our mentors can perform security audits, review your overall
              architecture, or check your coding style.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col xl:p-16 xl:pt-2 p-2 gap-8">
        <h2 className="font-bold text-4xl font-raleway text-gray-900">
          Why Code Reviews are Important
        </h2>
        <p className="text-xl font-open-sans font-normal text-gray-600">
          The main purpose of code review is to prevent problematic code from
          being deployed to production. Reviews can help you catch bugs,
          identify missed edge cases, spot design issues, and avoid
          anti-patterns before they become a problem.
        </p>
        <p className="text-xl font-open-sans font-normal text-gray-600">
          The second purpose of code review is to help you be a better
          developer. When you know that your code is going to be reviewed by
          another developer, you write code differently. You take the time to
          give methods or functions names that express what they do. You add
          more thorough tests. You write code that’s meant to be readable. You
          spend more time thinking through side effects and unintended
          consequences.
        </p>
      </div>
      <div className="mt-8 flex flex-col xl:p-16 xl:pt-2 p-2 gap-8">
        <h2 className="font-bold text-4xl font-raleway text-gray-900">
          Code Review Checklist
        </h2>
        <p className="text-xl font-open-sans font-normal text-gray-600">
          If you are an experienced developer who can go through someone else's
          code line by line to help check their approach to a problem, here is a
          list of essential questions to ask yourself during this process:
        </p>

        <div className="lg:flex lg:flex-wrap">
          {questions.map((question, index) => (
            <div
              key={index}
              className="lg:w-1/2 w-full p-4 flex items-start justify-center"
            >
              <CheckIcon />
              <p className=" w-3/4 text-lg font-open-sans font-normal text-gray-600">
                {question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
