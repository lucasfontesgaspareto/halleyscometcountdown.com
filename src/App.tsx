import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed, ...rest }: any) => {
  console.log(rest)
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <div>
      <div className="text-white font-bold text-2xl">Days left: {rest.days.toLocaleString()}</div>
      <div className="text-white font-bold text-2xl">Years left: {(rest.days / 365).toFixed(0).toLocaleString()}</div>
      <div className="text-white text-2xl">{hours}:{minutes}:{seconds}</div>
    </div>;
  }
};

function App() {
  return (
    <div className="bg-slate-950 flex-wrap w-screen h-screen flex justify-center items-center overflow-hidden relative">
      <div className="sm:flex">
      <div className="text-9xl relative sun">
        ☀️
        <div className="text-xs absolute top-20 sm:top-96">🌎</div>
      </div>
      <div className="absolute w-full h-full top-0 right-4 animate-pulse comet">
        ☄️
      </div>
      <div className="mt-10 sm:mt-0">
        <Countdown
          date={2871774000000}
          renderer={renderer}
        />
      </div>
      </div>
    </div>
  );
}

export default App;
