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

  /**
   * Updates the zone state based on the value of the event target.
   *
   * @param {any} e - The event object.
   * @return {void} This function does not return a value.
   */
  const handleZoneChange = (e: any) => {
    setZone(e.target.value);
  };

  const formatDate = (date: DateTime) =>
    date.toFormat("cccc, dd LLLL yyyy", { locale: "id" });

  return (
    <main className="bg-primary-focus grid h-auto md:h-screen w-auto place-items-center px-6 py-24 lg:px-8">
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-center mb-3 text-base text-lg font-semibold text-indigo-600">
            {loading
              ? "Loading..."
              : jam.toFormat("cccc, dd LLLL yyyy", { locale: "id" })}
          </p>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max mx-auto">
            <div className="flex flex-col p-2 bg-gray-100 rounded-lg text-gray-90">
              <span className="font-mono text-3xl">
                {loading ? ".." : jam.toFormat("HH")}
              </span>
              Jam
            </div>
            <div className="flex flex-col p-2 bg-gray-100 rounded-lg text-gray-90">
              <span className="font-mono text-3xl">
                {loading ? ".." : jam.toFormat("mm")}
              </span>
              Menit
            </div>
            <div className="flex flex-col p-2 bg-gray-100 rounded-lg text-gray-90">
              <span className="font-mono text-3xl">
                {loading ? ".." : jam.toFormat("ss")}
              </span>
              Detik
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
          <div className="mt-6">
            <p className="text-left mb-3 text-base text-md font-semibold text-indigo-600">
              Hari Libur Nasional Bulan Ini
            </p>
            {loadingLibur ? (
              "Loading..."
            ) : holidays.length === 0 ? (
              <p className="text-sm text-gray-700">
                Yah, sayang sekali tidak ada hari libur Nasional Bulan ini
              </p>
            ) : (
              <div>
                <ul>
                  {holidays.map((holiday) => (
                    <li
                      className="text-xs text-gray-700 font-semibold border border-gray rounded-lg p-1 mb-2"
                      key={holiday.holiday_date}
                    >
                      {holiday.holiday_name}
                      <br />
                      {formatDate(DateTime.fromISO(holiday.holiday_date))}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
