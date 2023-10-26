import { useState, useEffect } from "react";
import { DateTime } from "luxon";
// import "./App.css";

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
    <div className="">
      <h3 className="">Indonesian Digital Clock</h3>
      <h1>{loading ? "Loading..." : jam.toFormat("HH:mm:ss")}</h1>
      <p>
        {loading
          ? "Loading..."
          : jam.toFormat("cccc, dd LLLL yyyy", { locale: "id" })}
      </p>
      <div className="card">
        <select
          className="custom-select"
          onChange={handleZoneChange}
          value={zone}
        >
          <option value="Asia/Jakarta">WIB (Jakarta)</option>
          <option value="Asia/Makassar">WITA (Makassar)</option>
          <option value="Asia/Jayapura">WIT (Jayapura)</option>
        </select>
      </div>
      <p className="read-the-docs">
        <a href="https://github.com/rizkytegar/react-digital-clock">
          Contribute on Github
        </a>
      </p>
    </div>
  );
}

export default App;
