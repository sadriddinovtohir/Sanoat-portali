import { createTheme } from "@mui/material";
import type { valuess } from "../../service/types";
import { COLORS } from "./colors";

const breakpoints: valuess = {
  xs: 0,
  sm: 320,
  md: 1000,
  lg: 1400,
  xl: 1920,
};
export const lightTheme = createTheme({
    breakpoints:{values:breakpoints},
    palette:{
        mode:"light",
        primary:{main :COLORS.titletext},
        background :{default : COLORS.white},
        text:{primary:COLORS.textGrey, secondary:COLORS.btn},
        info:{main:COLORS.infoMain},
    }
})
export const darkTheme = createTheme({
    breakpoints:{values:breakpoints},
    palette:{
        mode:"dark",
        primary:{main : "#000a3cff"},
        background :{default : "#00000aff"},
        text:{primary:COLORS.white, secondary:COLORS.btn},
        info:{main:COLORS.infoMain},
        
    }
})
