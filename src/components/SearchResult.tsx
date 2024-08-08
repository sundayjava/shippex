import TimelineComponent from "./searchSubComponents/TimelineComponent";
import TrackingDetails from "./searchSubComponents/TrackingDetails";

export default function SearchResult() {
  return (
    <div className="flex justify-start md:flex-row flex-col items-start w-full">
      <div className="md:w-[500px] w-full">
        <TrackingDetails />
      </div>
      <div className="">
        <TimelineComponent />
      </div>
    </div>
  );
}
