import { useAppStore } from "../hooks/app.provider";


export default function Stepper() {
  const { stepNo, setStepNo } = useAppStore();
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
              <button
                onClick={() => setStepNo(step)}
                className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                  stepNo > step
                    ? "bg-green-600 hover:bg-green-900 text-white"
                    : stepNo === step
                    ? "border-2 border-green-600 bg-white"
                    : "bg-white border-2 border-gray-200 hover:border-gray-400"
                }`}
              >
                <span className="text-sm">{step}</span>
              </button>
            </>
          </li>
        ))}
      </ol>
    </div>
  );
}
