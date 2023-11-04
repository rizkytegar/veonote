import { DateTime } from "luxon"; 
interface DigitalClockProps {
  jam: DateTime;
  loading: boolean;
}

const DigitalClock: React.FC<DigitalClockProps> = ({ loading, jam }) => {
  return (
    <div className="p-3 flex flex-auto flex-col gap-5">
      <p className="text-center mb-3 text-lg font-semibold text-white">
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
          <div className="flex flex-col p-2 bg-white bg-opacity-20 text-white rounded-lg min-w-[4rem] max-w-full">
            <span className="font-mono text-3xl">{jam.toFormat("HH")}</span>
            Jam
          </div>
          <div className="flex flex-col p-2 bg-white bg-opacity-20 text-white rounded-lg min-w-[4rem] max-w-full">
            <span className="font-mono text-3xl">{jam.toFormat("mm")}</span>
            Menit
          </div>
          <div className="flex flex-col p-2 bg-white bg-opacity-20 text-white rounded-lg min-w-[4rem] max-w-full">
            <span className="font-mono text-3xl">{jam.toFormat("ss")}</span>
            Detik
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalClock;
