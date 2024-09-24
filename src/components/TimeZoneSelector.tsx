/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DateTime } from "luxon";
import Clock from "./Clock";

interface TimeZoneSelectorProps {
  zone: string;
  setZone: React.Dispatch<React.SetStateAction<string>>;
  loadingLibur: boolean;
  holidays: any[];
}

const TimeZoneSelector: React.FC<TimeZoneSelectorProps & { setLoading: (loading: boolean) => void }> = ({
  zone,
  setZone,
  loadingLibur,
  holidays,
  setLoading,
}) => {
  const handleZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true); // Set loading to true when zone changes
    setZone(e.target.value);
  };

  const formatDate = (date: DateTime) =>
    date.toFormat("cccc, dd LLLL yyyy", { locale: "id" });

  const normalizeDateFormat = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  const generateHolidays = (holidays: any[]) => {
    return (
      <div>
        <ul>
          {holidays.map((holiday) => (
            <li
              className="text-xs font-semibold border border-gray rounded-lg p-1 mb-2"
              key={holiday.holiday_date}
            >
              {holiday.holiday_name}
              <br />
              {formatDate(DateTime.fromISO(normalizeDateFormat(holiday.holiday_date)))}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <select
          onChange={handleZoneChange}
          value={zone}
          className="select bg-white bg-opacity-30 text-white w-full p-3 rounded-full cursor-pointer appearance-none text-center focus:outline-none focus:ring-0"
        >
          <option className="bg-white bg-opacity-30 text-black" value="Asia/Jakarta">WIB (Jakarta)</option>
          <option className="bg-white bg-opacity-30 text-black" value="Asia/Makassar">WITA (Makassar)</option>
          <option className="bg-white bg-opacity-30 text-black" value="Asia/Jayapura">WIT (Jayapura)</option>
        </select>
      </div>

      <div className="mt-6 text-center text-white">
        <p className="mb-1 text-base text-md font-bold">Hari Libur Nasional Bulan Ini</p>
        {loadingLibur ? "Loading..." : generateHolidays(holidays)}
      </div>

      {/* Add the Clock component here and pass the selected zone */}
      <Clock zone={zone} />
    </div>
  );
};

export default TimeZoneSelector;
