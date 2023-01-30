import { Check, User } from "tabler-icons-react";

enum Stutus {
  COMPLETE = "complete",
  CURRENT = "current",
  UPCOMING = "upcoming",
}

const steps = [
  { name: "Name", icon: User, href: "#", status: Stutus.CURRENT },
  { name: "Step 2", icon: User, href: "#", status: Stutus.UPCOMING },
  { name: "Step 3", icon: User, href: "#", status: Stutus.UPCOMING },
  { name: "Step 4", icon: User, href: "#", status: Stutus.UPCOMING },
  { name: "Step 5", icon: User, href: "#", status: Stutus.UPCOMING },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Stepper() {
  return (
    <ol role="list" className="inline-flex items-center">
      {steps.map((step, stepIdx) => (
        <li
          key={step.name}
          className={`relative`}
          // className={classNames(
          //   stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
          //   "relative"
          // )}
        >
          <>
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              {/* line */}
              <div className={`h-0.5 w-full ${step.status === Stutus.UPCOMING ? 'bg-white': 'bg-gray-800'}`} />
            </div>
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gray-800">
              <User className="h-5 w-5 text-white" />
              {/* <span className="absolute">{step.name}</span> */}
            </span>
          </>
        </li>
      ))}
    </ol>
  );
}

export default Stepper;
