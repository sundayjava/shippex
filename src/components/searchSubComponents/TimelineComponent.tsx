import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import tt from "../../assets/tt.jpeg";

import { LuPackagePlus } from "react-icons/lu";
import { LuPackageCheck } from "react-icons/lu";
import { LuPackageSearch } from "react-icons/lu";
import { BsTruck } from "react-icons/bs";

export default function TimelineComponent() {
  return (
    <div className="md:mt-5 mt-10 md:ml-12 lg:ml-20 ml-0">
      <p className="uppercase ml-7 text-[18px] font-bold text-[#1F2937]">
        Timeline
      </p>
      <Timeline position="right" className="w-full">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              flex: { xs: 0.6, md: 0.4 },
              textAlign: "start",
              marginTop: 1,
            }}
          >
            <div className="text-[14px] font-medium leading-5 text-[#6B7280]">
              <p>12:05PM</p>
              <p className="mt-1">Dec 16, 2023</p>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ border: "1px solid #e5e7eb" }}
            >
              <LuPackagePlus size={18} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              pt: "12px",
              pb: "30px",
              px: 2,
              width: { md: "280px" },
            }}
          >
            <p className="font-semibold leading-6 text-[#1F2937]">
              Shipment created
            </p>
            <p className="font-medium leading-6 text-[#6B7280] mt-1">
              Shipment Description
            </p>
            <div className="flex items-center mt-3">
              <div className="w-4 h-4 rounded-full mr-2">
                <img src={tt} className="rounded-full w-full object-cover" />
              </div>
              <span className="text-[15px] font-semibold">Abdo Saeed</span>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              flex: { xs: 0.6, md: 0.4 },
              textAlign: "start",
              marginTop: 1,
            }}
          >
            <div className="text-[14px] font-medium leading-5 text-[#6B7280]">
              <p>14:05PM</p>
              <p className="mt-1">Dec 16, 2023</p>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ border: "1px solid #e5e7eb" }}
            >
              <LuPackageCheck size={18} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              pt: "12px",
              pb: "30px",
              px: 2,
              width: { md: "280px" },
            }}
          >
            <p className="font-semibold leading-6 text-[#1F2937]">
              Shipment pick-up
            </p>
            {/* <p className="font-medium leading-6 text-[#6B7280] mt-1">
              proof of pick-up description
            </p> */}
            <div className="flex items-center mt-3">
              <div className="w-4 h-4 rounded-full mr-2">
                <img src={tt} className="rounded-full w-full object-cover" />
              </div>
              <span className="text-[15px] font-semibold">Beshouy Ezzat</span>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              flex: { xs: 0.6, md: 0.4 },
              textAlign: "start",
              marginTop: 1,
            }}
          >
            <div className="text-[14px] font-medium leading-5 text-[#6B7280]">
              <p>14:05PM</p>
              <p className="mt-1">Dec 16, 2023</p>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ border: "1px solid #e5e7eb" }}
            >
              <LuPackageSearch size={18} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              pt: "12px",
              pb: "30px",
              px: 2,
              width: { md: "280px" },
            }}
          >
            <p className="font-semibold leading-6 text-[#1F2937]">
              Proof of pick-up
            </p>
            <p className="font-medium leading-6 text-[#6B7280] mt-1">
              proof of pick-up description
            </p>
            <div className="flex items-center mt-3">
              <div className="w-4 h-4 rounded-full mr-2">
                <img src={tt} className="rounded-full w-full object-cover" />
              </div>
              <span className="text-[15px] font-semibold">James Collins</span>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              flex: { xs: 0.6, md: 0.4 },
              textAlign: "start",
              marginTop: 1,
            }}
          >
            <div className="text-[14px] font-medium leading-5 text-[#6B7280]">
              <p>12:05PM</p>
              <p className="mt-1">Dec 16, 2023</p>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ border: "1px solid #e5e7eb" }}
            >
              <BsTruck size={18} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              pt: "12px",
              pb: "30px",
              px: 2,
              width: { md: "280px" },
            }}
          >
            <p className="font-semibold leading-6 text-[#1F2937]">
              Shipment on delivery
            </p>
            <p className="font-medium leading-6 text-[#6B7280] mt-1">
              proof of pick-up description
            </p>
            {/* <div className="flex items-center mt-3">
              <div className="w-4 h-4 rounded-full mr-2">
                <img src={tt} className="rounded-full w-full object-cover" />
              </div>
              <span className="text-[15px] font-semibold">Abdo Saeed</span>
            </div> */}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
