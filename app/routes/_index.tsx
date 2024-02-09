import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Workout Calendar Creator" },
    { name: "description", content: "Welcome to Workout Calendar Creator!" },
  ];
};

export default function Index() {
  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <header className="flex items-center justify-between px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          <time dateTime="2022-01">January 2022</time>
        </h1>
        <div></div>
      </header>
      <div className="shadow ring-1 ring-black ring-opacity-5 rounded-sm lg:flex lg:flex-auto lg:flex-col mx-2">
        {/* Day of week column headings */}
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="flex justify-center bg-white py-2">
            <span>M</span>
            <span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>T</span>
            <span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>W</span>
            <span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>T</span>
            <span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>F</span>
            <span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>S</span>
            <span className="sr-only sm:not-sr-only">at</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>S</span>
            <span className="sr-only sm:not-sr-only">un</span>
          </div>
        </div>

        {/* Individual day of week squares */}
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          {/* lg screen */}
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            {[...Array(42)].map((_e, i) => (
              <div key={i} className="relative bg-white px-3 py-2">
                <time dateTime="2021-12-27">{i}</time>
              </div>
            ))}
          </div>

          {/* sm screen */}
          <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
            test sm
          </div>
        </div>
      </div>
    </div>
  );
}
