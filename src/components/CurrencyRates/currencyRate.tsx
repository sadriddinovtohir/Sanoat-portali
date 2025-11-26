import { CircularProgress  } from "@mui/material";
import { Stack } from "@mui/material";
import {  Typography } from "@mui/material";
import {  useMediaQuery } from "@mui/material";
import  { useState, useEffect } from "react";

const CurrencyRates = () => {
    const size = useMediaQuery("(max-width:762px)");
  const [usdToUz, setUsdToUz] = useState(null);
  const [rubToUz, setRubToUz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsdToUz(data.rates["UZS"]);

        const rubResponse = await fetch("https://api.exchangerate-api.com/v4/latest/RUB");
        const rubData = await rubResponse.json();
        setRubToUz(rubData.rates["UZS"]);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyRates();
  }, []);

  if (loading) {
    return <div>
      <CircularProgress />
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  
  return (
    <div>
      <Stack style={{color:"blue", fontSize:"10px", display:size ? "none" :"flex",  fontWeight:"700", flexDirection: "row" , gap:"15px" }}>
        <Typography variant="h6" style={{fontSize:"18px"}} >USD: {usdToUz} UZS</Typography>
        <Typography variant="h6"  style={{fontSize:"18px"}}>RUB: {rubToUz} UZS</Typography>
      </Stack>
    </div>
  );
};

export default CurrencyRates;
