import { useState, useEffect } from "react";
import { DateTime } from "luxon";
/**
 * Renders a digital clock component that displays the current time in the selected time zone.
 *
 * @return {JSX.Element} The digital clock component.
 */
function App() {
  const [zone, setZone] = useState("Asia/Jakarta");
  const [jam, setJam] = useState(DateTime.now().setZone("Asia/Jakarta"));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const intervalId = setInterval(() => {
      setJam(DateTime.now().setZone(zone));
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [zone]);

  /**
   * Updates the zone state based on the value of the event target.
   *
   * @param {any} e - The event object.
   * @return {void} This function does not return a value.
   */
  const handleZoneChange = (e: any) => {
    setZone(e.target.value);
  };

  return (
    <main className="bg-primary-focus grid h-screen place-items-center px-6 py-24 w-full lg:px-8">
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <p className="text-base font-semibold text-indigo-600">
            {loading
              ? "Loading..."
              : jam.toFormat("cccc, dd LLLL yyyy", { locale: "id" })}
          </p>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-white rounded-box text-gray-90">
              <span className="font-mono text-5xl">
              {loading ? ".." : jam.toFormat("HH")}
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-white rounded-box text-gray-90">
              <span className="font-mono text-5xl">
              {loading ? ".." : jam.toFormat("mm")}
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-white rounded-box text-gray-90">
              <span className="font-mono text-5xl">
              {loading ? ".." : jam.toFormat("ss")}
              </span>
              sec
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <select
              onChange={handleZoneChange}
              value={zone}
              className="select bg-secondary text-white select-bordered w-full max-w-xs"
            >
              <option className="bg-white text-primary" value="Asia/Jakarta">
                WIB (Jakarta)
              </option>
              <option className="bg-white text-primary" value="Asia/Makassar">
                WITA (Makassar)
              </option>
              <option className="bg-white text-primary" value="Asia/Jayapura">
                WIT (Jayapura)
              </option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
