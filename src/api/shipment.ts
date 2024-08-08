import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/frappe.client.get`;

export const getShipmentByTrackingNumber = async (trackingNumber: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        doctype: "AWB",
        filters: {
          name: ["like", `%${trackingNumber}%`],
        },
      },
    });

    if (response.data) {
      return response.data;
    } else {
      throw new Error("No results found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        throw new Error("Network error");
      }
      throw new Error(error.response.data.message || "Error fetching data");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
