import { CheckIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { FormContext } from "../context";
import classNames from "../utils/classNames";
// status: 'complete', 'current', 'upcoming'

export default function Stepper() {
  const { steps, setActiveStep } = useContext(FormContext);

  return (
    <nav aria-label="Progress">
      <div className="flex items-center flex-col">
        <ol className="flex items-center sm:flex-col md:flex-row mx-auto mt-32 mb-8">
          {steps.map(({ name, status }, stepIdx) => (
            <li
              key={name}
              className={classNames(
                stepIdx !== steps.length - 1 ? "pr-16 sm:pr-32" : "",
                "relative"
              )}
            >
              {status === "active" ? (
                <>
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <button
                    onClick={() => setActiveStep(stepIdx)}
                    className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-yellow-500 rounded-full"
                    aria-current="step"
                  >
                    <span className="h-9 flex flex-col items-center">
                      <span className="z-10 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-indigo-800">
                        <span
                          className="relative h-2.5 w-2.5 bg-yellow-500 rounded-full relative"
                          style={{ top: "0.8rem" }}
                        />
                      </span>
                      <span
                        className="text-xs font-semibold tracking-wide text-gray-600"
                        style={{ marginTop: "2.72rem" }}
                      >
                        {name}
                      </span>
                    </span>
                  </button>
                </>
              ) : status === "completed" ? (
                <>
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="h-0.5 w-full bg-yellow-500" />
                  </div>
                  <button
                    onClick={() => setActiveStep(stepIdx)}
                    type="button"
                    className="relative w-8 h-8 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-500"
                  >
                    <span className="h-9 flex flex-col items-center">
                      <span className="relative top-2 z-10 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-indigo-800">
                        <CheckIcon
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-xs font-semibold tracking-wide text-gray-600 mt-8">
                        {name}
                      </span>
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                    <span className="h-9 flex flex-col items-center">
                      <span className="z-10 w-8 h-8 flex items-center justify-center rounded-full">
                        <span
                          className="relative h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                          style={{ top: "0.8rem" }}
                        />
                      </span>
                      <span
                        className="text-xs font-semibold tracking-wide text-gray-600"
                        style={{ marginTop: "2.72rem" }}
                      >
                        {name}
                      </span>
                    </span>
                  </div>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
