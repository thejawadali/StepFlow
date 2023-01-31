import { useAppStore } from "../hooks/app.provider";


export default function Stepper() {
  const { stepNo, increaseStep } = useAppStore();
  return (
    <div className="my-5 flex justify-center w-full ">
      <ol role="list" className="flex items-center">
        {[1, 2, 3].map((step) => (
          <li
            key={step}
            className={`relative ${step !== 3 && "pr-8 sm:pr-20"}`}
          >
            <>
              <div className="absolute inset-0 flex items-center">
                <div className={`h-0.5 w-full ${ stepNo > step ? "bg-green-600" : "bg-gray-200"}`}/>
              </div>
              <span
                className={`relative flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full ${
                  stepNo > step
                    ? "bg-green-600 text-white"
                    : stepNo === step
                    ? "border-2 border-green-600 bg-white"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                <span className="text-xs md:text-sm">{step}</span>
              </span>
            </>
          </li>
        ))}
      </ol>
    </div>
  );
}
