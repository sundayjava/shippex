import { GoArrowUpRight } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { LuArrowDownToDot } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { BsTruck } from "react-icons/bs";
import { LuReceipt } from "react-icons/lu";

export default function TrackingDetails() {
  return (
    <div className="border rounded-xl">
      <div className="p-5">
        <h1 className="text-[18px] text-[#1F2937] font-bold pb-1">
          4515645646466
        </h1>
        <p className="text-[14px] text-[#6B7280] font-normal leading-5">
          Last updated 16/12/2023 11:33 AM
        </p>
        <div className="w-full mt-4">
          <div className="grid grid-cols-2 w-full text-[14px] p-4 gap-4 font-bold items-start">
            <div className="flex items-center p-2 text-[#6B7280] font-medium">
              <GoArrowUpRight className="mr-2" /> <span>Sender</span>
            </div>
            <div className="p-2 text-[#1F2937] font-medium">Mohamamd Manaa</div>

            <div className="flex items-center p-2 text-[#6B7280] font-medium">
              <RxPerson className="mr-2" /> <span>Consignee</span>
            </div>
            <div className="p-2 text-[#1F2937] font-medium">Beshouy Ezzat</div>

            <div className="flex items-center p-2 text-[#6B7280] font-medium">
              <LuArrowDownToDot className="mr-2" /> <span>Origin Address</span>
            </div>
            <div className="p-2 text-[#1F2937] font-medium">
              Ahmed Hassan <br/>25, Nile Street, Zamalek <br/> Cairo <br/> Egypt
            </div>

            <div className="flex items-center p-2 text-[#6B7280] font-medium">
              <FiMapPin className="mr-2" /> <span>Destination Address</span>
            </div>
            <div className="p-2 text-[#1F2937] font-medium">
              Fatima Ali <br/>10, Corniche Road, Gleem <br/> Alexandria <br/> Egypt
            </div>

            <div className="flex items-center p-2 text-[#6B7280] font-medium">
              <BsTruck className="mr-2" /> <span>Shipping Service</span>
            </div>
            <div className="p-2 text-[#1F2937] font-medium">Express Service</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full p-4 gap-4 font-bold bg-[#F8FAFC]">
        <div className="flex items-center py-2 px-6 text-[#6B7280] font-medium">
          <LuReceipt className="mr-2" /> <span>Total COD Amount</span>
        </div>
        <div className="p-2 text-[#1F2937] font-medium">499.55 EGP</div>
      </div>
    </div>
  );
}
