import "./App.css";

import { useState, useEffect } from "react";
import { DateTime } from "luxon";

/**
 * Renders the main component of the application.
 *
 * @return {JSX.Element} The JSX element representing the main component.
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
   * Updates the zone value based on the input event.
   *
   * @param {Event} e - The input event triggered by the user.
   * @return {void} This function does not return a value.
   */

  const handleZoneChange = (e) => {
    setZone(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        {loading ? <p>Loading...</p> : <p>{jam.toFormat("HH:mm:ss")}</p>}
        <select
          onChange={handleZoneChange}
          value={zone}
          className="custom-select"
        >
          <option value="Asia/Jakarta">WIB (Asia/Jakarta)</option>
          <option value="Asia/Makassar">WITA (Asia/Makassar)</option>
          <option value="Asia/Jayapura">WIT (Asia/Jayapura)</option>
        </select>
      </header>
    </div>
  );
}

export default App;
