/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import DigitalClock from "./components/DigitalClock";
import TimeZoneSelector from "./components/TimeZoneSelector";

/**
 * Renders a digital clock component that displays the current time in the selected time zone.
 *
 * @return {JSX.Element} The digital clock component.
 */
function App() {
  const [zone, setZone] = useState("Asia/Jakarta");
  const [jam, setJam] = useState(DateTime.now().setZone("Asia/Jakarta"));
  const [loading, setLoading] = useState(false);
  const [loadingLibur, setLoadingLibur] = useState(false);
  const [holidays, setHolidays] = useState<any[]>([]);
  const currentMonth: number = jam.month;
  const currentYear: number = jam.year;

  useEffect(() => {
    setLoading(true);
    setLoadingLibur(true);

    async function fetchHolidays() {
      try {
        const apiUrl: string = `https://api-harilibur.vercel.app/api?month=${currentMonth}&year=${currentYear}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setHolidays(data);
        setLoadingLibur(false);
      } catch (error) {
        console.error("Error fetching holidays:", error);
        setLoadingLibur(false);
      }
    }

    fetchHolidays();

    const intervalId = setInterval(() => {
      setJam(DateTime.now().setZone(zone));
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [zone, currentMonth, currentYear]);

  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 background-animate flex items-center justify-center h-screen w-screen px-2 py-24 md:px-8">
      <div className="w-full md:w-96 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl drop-shadow-lg text-center">
        <div className="p-5 overflow-hidden">
          <DigitalClock loading={loading} jam={jam} />

          <TimeZoneSelector
            zone={zone}
            setZone={setZone}
            setLoading={setLoading}
            loadingLibur={loadingLibur}
            holidays={holidays}
          />

          <a
            className="text-center mt-5 font-semibold p-3 bg-white bg-opacity-30 rounded-full text-white flex gap-x-1 items-center justify-center"
            target="_new"
            href="https://github.com/rizkytegar/indonesian-digital-clock"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github h-5 w-5" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
            Kontribusi Di Github
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;