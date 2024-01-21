/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime } from "luxon";

interface TimeZoneSelectorProps {
  zone: string;
  setZone: React.Dispatch<React.SetStateAction<string>>;
  loadingLibur: boolean;
  holidays: any[];
}

const TimeZoneSelector: React.FC<
  TimeZoneSelectorProps & { setLoading: (loading: boolean) => void }
> = ({
  zone,
  setZone,
  loadingLibur,
  holidays,
  setLoading, // Terima setLoading dari DigitalClock
}) => {
  /**
   * Updates the zone state based on the value of the event target.
   *
   * @param {any} e - The event object.
   * @return {void} This function does not return a value.
   */

  const handleZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true); // Set loading ke true saat zone berubah
    setZone(e.target.value);
  };

  const formatDate = (date: DateTime) =>
    date.toFormat("cccc, dd LLLL yyyy", { locale: "id" });

  return (
    <div>
      <div className="flex items-center justify-center">
        <select
          onChange={handleZoneChange}
          value={zone}
          className="select bg-white bg-opacity-30 text-white w-full p-3 rounded-full cursor-pointer appearance-none text-center focus:outline-none focus:ring-0"
        >
          <option className="bg-white bg-opacity-30 text-black" value="Asia/Jakarta">
            WIB (Jakarta)
          </option>
          <option className="bg-white bg-opacity-30 text-black" value="Asia/Makassar">
            WITA (Makassar)
          </option>
          <option className="bg-white bg-opacity-30 text-black" value="Asia/Jayapura">
            WIT (Jayapura)
          </option>
        </select>
      </div>

      <div className="mt-6 text-center text-white">
        <p className="mb-1 text-base text-md font-bold">
          Hari Libur Nasional Bulan Ini
        </p>
        {loadingLibur ? (
          "Loading..."
        ) : holidays.length === 0 ? (
          <p className="text-sm">
            Yah, sayang sekali tidak ada hari libur Nasional Bulan ini
          </p>
        ) : (
          <div>
            <ul>
              {holidays.map((holiday) => (
                <li
                  className="text-xs font-semibold border border-gray rounded-lg p-1 mb-2"
                  key={holiday.holiday_date}
                >
                  {holiday.holiday_name}
                  <br />
                {formatDate(DateTime.fromFormat(holiday.holiday_date, "dd LLLL yyyy", { locale: "id" }))}
  {/*                   {formatDate(DateTime.fromISO(holiday.holiday_date))} */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeZoneSelector;
