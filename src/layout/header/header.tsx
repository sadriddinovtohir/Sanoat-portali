import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material"
import { Box } from "@mui/material"
import { Button } from "@mui/material"
import { Container } from "@mui/material"
import { Modal } from "@mui/material"
import { Stack } from "@mui/material"
import { TextField, } from "@mui/material"
import { Typography } from "@mui/material"
import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material"
import type React from "react"
import { useEffect, useState } from "react";
import CurrencyRates from "../../components/CurrencyRates/currencyRate";
import img from "../../assets/img/header.webp"
import { NavLink } from "react-router-dom";
import { loadState, saveState } from "../../configs/localStorej/localstorej";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useForm } from "react-hook-form";
import BasicSelect from "../../components/Transilation/transilation";
import { t } from "../../utils/i18n";

interface headerProps {
  setmode: (value: string) => void;
}
interface headerinput {
  id: string,
  password: number,
}

const Header: React.FC<headerProps> = ({ setmode }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [open, setopen] = useState<boolean>(false);

  const MODE = loadState("mod")
  const { handleSubmit, reset, register } = useForm<headerinput>();
  const Submit = (data: headerinput) => {
    console.log(data.id, data.password);
    setopen(false)
    reset();

  }

  const handelsubmitModal = () => {
    if(!MODE){
    saveState("mod", "light")
      setmode("light")
    }else if (MODE == "light") {
      saveState("mod", "dark")
      setmode("dark")
    } else {
      saveState("mod", "light")
      setmode("light")
    }
  }

  const handelUser = () => {
    setopen((p) => !p)
  }




  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const size = useMediaQuery("(max-width:377px)");
  const modalsize = useMediaQuery("(max-width:416px)");
  const theme = useTheme()
  return (
    <Stack style={{ width: "100%" }}>
      <Container>
        <Stack style={{
          flexDirection: "row",
          justifyContent: !size ? "space-between" : "center",
          alignItems: "center",
          flexWrap: "wrap",

        }}>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 600,
              textAlign: "center",
              color: "#6366F1",
              paddingTop: "10px"
            }}
          >
            {time}
          </div>



          <Stack>
            <CurrencyRates />
          </Stack>
          <Stack style={{  paddingTop: "20px", paddingBottom: "10px", flexDirection: "row", gap: "10px" }}>



            <button
              onClick={handelsubmitModal}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.text.secondary,
                boxShadow: MODE
                  ? "0 4px 8px rgba(0,0,0,0.2)"
                  : "0 2px 4px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                padding: "0",
              }}
            >
              {MODE == "light" && MODE == "" ? <div style={{ color: "#fff", paddingTop: "4px" }}><LightModeOutlined /> </div> : <div style={{ color: "#fff", paddingTop: "4px" }}><DarkModeOutlined /></div>}
            </button>
            <button onClick={handelUser} style={{
              paddingTop: "4px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              backgroundColor: theme.palette.text.secondary, color: "#fffd",
            }}>
              <AccountCircleIcon />
            </button>
            <Box>
              <BasicSelect />
            </Box>
            <Modal
              open={open}
              onClose={() => setopen(false)}
            >
              <Stack sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: modalsize ? 300 : 400,
                minHeight: 100,
                borderRadius: 2,
                bgcolor: 'background.paper',

              }}>

                <Stack style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Typography style={{ padding: "10px" }} variant="h5">
                    Tizimga kirish:
                  </Typography>
                  <Button onClick={() => setopen(false)} variant="outlined" style={{ border: "none", height: "30px", color: "red" }}>
                    X
                  </Button>
                </Stack>
                <Box style={{ padding: "10px" }}>
                  <form onSubmit={handleSubmit(Submit)} >
                    <Stack style={{ gap: "10px", paddingTop: "5px" }}>
                      <TextField style={{ backgroundColor: theme.palette.background.default, borderRadius: "5px" }} variant="outlined" label="id" id="id" placeholder="id" type="text" {...register("id")} />
                      <TextField style={{ backgroundColor: theme.palette.background.default, borderRadius: "5px" }} variant="outlined" label="parol" id="parol" placeholder="parol" type="number" {...register("password")} />
                      <Button variant="contained" type="submit" >
                        submit
                      </Button>
                    </Stack>
                  </form>
                </Box>

              </Stack>

            </Modal>

          </Stack>
        </Stack>

      </Container>
      <Box sx={{ width: "100%", height: "150px" }}>
        <img
          src={img}
          alt="sanoat banner"
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Stack style={{ flexDirection: "row", width: "100%", marginBottom: "20px", boxShadow: MODE == "light" ? "0px 3px 6px rgba(0,0,0,0.16), 0px 3px 6px rgba(0,0,0,0.23)" : "0px 3px 6px rgba(255,255,255,0.16), 0px 3px 6px rgba(255,255,255,0.23)" }}>
        <Container>
          <Stack style={{ flexDirection: "row", justifyContent: "center", padding: "14px", gap: "20px" }}>
            <NavLink style={({ isActive }) => ({ transition: "all 0.8s ease", textDecoration: isActive ? "underline" : "none", color: isActive ? "red" : theme.palette.text.secondary, })} to={"/"}>
              {t("Home")}
            </NavLink>
            <NavLink style={({ isActive }) => ({ transition: "all 0.8s ease", textDecoration: isActive ? "underline" : "none", color: isActive ? "red" : theme.palette.text.secondary, })} to={"/about"}>
              {t("About")}
            </NavLink>
            <NavLink style={({ isActive }) => ({ transition: "all 0.8s ease", textDecoration: isActive ? "underline" : "none", color: isActive ? "red" : theme.palette.text.secondary, })} to={"/login"}>
              {t("Login")}
            </NavLink>
          </Stack>
        </Container>
      </Stack>

    </Stack>
  )
}
export default Header;