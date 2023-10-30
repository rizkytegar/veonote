import { DateTime } from "luxon";
import { useState, useEffect } from "react";

interface DigitalClockProps {
  jam: DateTime;
}

const DigitalClock: React.FC<DigitalClockProps> = ({ jam }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="card-body">
      <p className="text-center mb-3 text-lg font-semibold text-indigo-600">
        {loading
          ? "Loading..."
          : jam.toFormat("cccc, dd LLLL yyyy", { locale: "id" })}
      </p>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max mx-auto">
          <div className="flex flex-col p-2 bg-gray-100 rounded-lg text-gray-90">
            <span className="font-mono text-3xl">{jam.toFormat("HH")}</span>
            Jam
          </div>
          <div className="flex flex-col p-2 bg-gray-100 rounded-lg text-gray-90">
            <span className="font-mono text-3xl">{jam.toFormat("mm")}</span>
            Menit
          </div>
          <div className="flex flex-col p-2 bg-gray-100 rounded-lg text-gray-90">
            <span className="font-mono text-3xl">{jam.toFormat("ss")}</span>
            Detik
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalClock;
