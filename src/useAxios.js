import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios() {
  const [co2Data, setco2Data] = useState({});

  useEffect(() => {
    fetchco2Data();
  }, []);

  async function fetchco2Data() {
    const response = await axios({
      method: "get",
      url: "https://global-warming.org/api/co2-api",
    });

    setco2Data(response.data.co2);
  }

  // console.log(co2Data);
  return { co2Data };
}
