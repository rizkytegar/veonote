import { DateTime } from "luxon";
import React from "react";

interface TimeZoneSelectorProps {
  zone: string;
  setZone: React.Dispatch<React.SetStateAction<string>>;
  loadingLibur: boolean;
  holidays: any[];
}

const TimeZoneSelector: React.FC<TimeZoneSelectorProps> = ({
  zone,
  setZone,
  loadingLibur,
  holidays,
}) => {
  /**
   * Updates the zone state based on the value of the event target.
   *
   * @param {any} e - The event object.
   * @return {void} This function does not return a value.
   */
  const handleZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
  );
};

export default TimeZoneSelector;
