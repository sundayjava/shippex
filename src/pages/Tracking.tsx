import { ChangeEvent, useEffect, useState } from "react";
import NoResultComponent from "../components/NoResultComponent";
import SearchResult from "../components/SearchResult";
import errorImage from "../assets/showerr.png";
import connectionLost from "../assets/connectionLost.png";
import noresult from "../assets/noresult.png";
import notfound from "../assets/notfound.png";
import { getShipmentByTrackingNumber } from "../api/shipment";

const Tracking = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showError, setShowError] = useState("");
  const [searchResult, setSearchResult] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "");
    setSearchValue(newValue);
  };

  const handleSearch = async () => {
    if (searchValue.length < 13) {
      setShowError(" Please enter a valid AWB");
      return;
    }

    console.log("You entered: ", searchValue);

    setShowError("");
    setIsLoading(true);

    try {
      const result = await getShipmentByTrackingNumber(searchValue);
      if (result) {
        setHasFetched(true);
        console.log("Your result: ", result);
        setSearchResult(result);
      }
      setHasFetched(false);
      console.log("Your result: ", result);
      setSearchResult([]);
      setNetworkError(false);
      setRequestError(false);
    } catch (error: any) {
      if (error.message === "Network error") {
        setNetworkError(true);
      } else {
        setRequestError(true);
      }

      setSearchResult([]);
      console.log("Your Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  let content = isLoading ? (
    <div className="flex justify-center items-center h-[400px]">
      <p className="text-[14px] italic">Please wait...</p>
    </div>
  ) : hasFetched ? (
    searchResult.length > 0 ? (
      <div className="flex justify-center items-center">
        <SearchResult />
      </div>
    ) : (
      <div className="flex justify-center items-center h-[400px]">
        <NoResultComponent
          image={noresult}
          headline={"No results found"}
          subheadline={"No results found. Please try again."}
          requireRefresh={true}
          onRetry={handleSearch}
        />
      </div>
    )
  ) : networkError ? (
    <div className="flex justify-center items-center h-[400px]">
      <NoResultComponent
        image={connectionLost}
        headline={"Connection Lost"}
        subheadline={"Oops! It seems you're currently offline."}
        requireRefresh={false}
      />
    </div>
  ) : requestError ? (
    <div className="flex justify-center items-center h-[400px]">
      <NoResultComponent
        image={notfound}
        headline={"404"}
        subheadline={"Oops! The page you're looking for can't be found."}
        requireRefresh={true}
        onRetry={handleSearch}
      />
    </div>
  ) : (
    <div className="flex justify-center items-center h-[400px]">
      <NoResultComponent
        image={errorImage}
        headline={""}
        subheadline={"Enter a valid AWB ID to display details"}
        requireRefresh={false}
      />
    </div>
  );

  return (
    <div
      className={`slide-in container py-[48px] ${
        isVisible ? "slide-in-active" : ""
      }`}
    >
      <div className="bg-[#F8FAFC] py-[32px] mb-[32px] rounded-md flex sm:flex-row flex-col justify-center sm:items-start items-center">
        <div className="xl:w-[600px] lg:w-[550px] md:w-[400px] sm:w-[350px] w-[85%]">
          <input
            placeholder="Enter AWB ID"
            value={searchValue}
            onChange={handleInputChange}
            className={`${
              showError
                ? "custom-css-border outline-none"
                : "outline-none border border-[#E5E7EB]"
            } py-3 px-5 rounded-lg w-full`}
          />
          {showError && (
            <p className="text-[#EF4444] w-full mt-2">{showError}</p>
          )}
        </div>
        <button
          onClick={handleSearch}
          className={`${
            searchValue.length > 0
              ? "bg-shipping-secondary"
              : "bg-shipping-primary"
          } text-white py-3 sm:w-[120px] w-[85%] hover:transition-shadow sm:mt-0 mt-2 rounded-lg sm:ml-7 text-[14px] font-semibold hover:bg-shipping-secondary`}
        >
          Track
        </button>
      </div>

      {/* Search Result Here */}
      {content}
    </div>
  );
};

export default Tracking;

// {
//   "exc_type": "PermissionError",
//   "exception": "frappe.exceptions.PermissionError: <details><summary>You are not permitted to access this resource.</summary>Function <strong>frappe.client.get</strong> is not whitelisted.</details>",
//   "exc": "[\"Traceback (most recent call last):\\n  File \\\"apps/frappe/frappe/app.py\\\", line 95, in application\\n    response = frappe.api.handle()\\n  File \\\"apps/frappe/frappe/api.py\\\", line 55, in handle\\n    return frappe.handler.handle()\\n  File \\\"apps/frappe/frappe/handler.py\\\", line 47, in handle\\n    data = execute_cmd(cmd)\\n  File \\\"apps/frappe/frappe/handler.py\\\", line 82, in execute_cmd\\n    is_whitelisted(method)\\n  File \\\"apps/frappe/frappe/__init__.py\\\", line 783, in is_whitelisted\\n    throw(msg, PermissionError, title=\\\"Method Not Allowed\\\")\\n  File \\\"apps/frappe/frappe/__init__.py\\\", line 538, in throw\\n    msgprint(\\n  File \\\"apps/frappe/frappe/__init__.py\\\", line 506, in msgprint\\n    _raise_exception()\\n  File \\\"apps/frappe/frappe/__init__.py\\\", line 452, in _raise_exception\\n    raise raise_exception(msg)\\nfrappe.exceptions.PermissionError: <details><summary>You are not permitted to access this resource.</summary>Function <strong>frappe.client.get</strong> is not whitelisted.</details>\\n\"]",
//   "_server_messages": "[\"{\\\"message\\\": \\\"<details><summary>You are not permitted to access this resource.</summary>Function <strong>frappe.client.get</strong> is not whitelisted.</details>\\\", \\\"title\\\": \\\"Method Not Allowed\\\", \\\"indicator\\\": \\\"red\\\", \\\"raise_exception\\\": 1}\"]"
// }
