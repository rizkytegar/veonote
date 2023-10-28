import { DateTime } from "luxon";

interface DigitalClockProps {
  loading: boolean;
  jam: DateTime;
}

const DigitalClock: React.FC<DigitalClockProps> = ({ loading, jam }) => {
  return (

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
      </div>
 
  );
}

export default DigitalClock;
