import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import SelectTimeZone from "./SelectTimeZone";
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
    <main className="bg-primary-focus grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-base font-semibold text-indigo-600">
            {loading
              ? "Loading..."
              : jam.toFormat("cccc, dd LLLL yyyy", { locale: "id" })}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {loading ? "Loading..." : jam.toFormat("HH:mm:ss")}
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <select
              onChange={handleZoneChange}
              value={zone}
              className="select bg-secondary text-white select-bordered w-full max-w-xs"
            >
              <option
                className="bg-white text-primary"
                value="Asia/Jakarta"
              >
                WIB (Jakarta)
              </option>
              <option
                className="bg-white text-primary"
                value="Asia/Makassar"
              >
                WITA (Makassar)
              </option>
              <option
                className="bg-white text-primary"
                value="Asia/Jayapura"
              >
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
