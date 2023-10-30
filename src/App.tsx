/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import DigitalClock from './components/DigitalClock';
import TimeZoneSelector from './components/TimeZoneSelector';
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
    <main className="bg-primary-focus grid h-auto md:h-screen w-auto place-items-center px-6 py-24 lg:px-8">
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <DigitalClock loading={loading} jam={jam} />
          <TimeZoneSelector zone={zone} setZone={setZone} loadingLibur={loadingLibur} holidays={holidays} />
          <a className="text-center mt-10 font-semibold" target="_new" href="https://github.com/rizkytegar/indonesian-digital-clock">Kontribusi Di Github</a>
        </div>
      </div>
    </main>
  );
}

export default App;
