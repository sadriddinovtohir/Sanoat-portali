import { Box, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { t } from "../../../utils/i18n";
import sanoat from "../../../assets/img/sanoatimg1.png"
import EngineeringIcon from "@mui/icons-material/Engineering";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import global from '../../../assets/img/global.png'


export default function Home() {
  const size = useMediaQuery("(max-width:849px)");
  const imgSize = useMediaQuery("(max-width:414px)");
  const sizes = useMediaQuery("(min-width:813px)");
  return (
    <Container>
      <Stack style={{ flexDirection: "row", alignItems: "center", justifyContent: size ? "center" : "space-between", gap: size ? "50px" : "", flexWrap: sizes ? "nowrap" : "wrap" }}>
        <Stack style={{ maxWidth: "400px", gap: "10px" }}>
          <Typography variant="h5" style={{ fontWeight: "600" }}>
            {t("WordTitle")}
          </Typography>
          <Typography variant="p" >
            {t("WordText")}
          </Typography>
        </Stack>
        <Stack  >
          <img style={{ maxWidth: imgSize ? "300px" : "400px", borderRadius: "10px", justifyContent:"center" }} src={sanoat} alt="img" />
        </Stack>
      </Stack>
      <Stack style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <Box>
          <img style={{maxWidth:imgSize ? "300px" : "400px"}} src={global} alt="" />
        </Box>
        <Stack gap={"50px"} direction={"row"} flexWrap={"wrap"} justifyContent={"center"} >
          <Stack spacing={2}>
            <Stack alignItems={"center"}>
              <EngineeringIcon style={{ fontSize: "70px", color: "#2d5cf7ff" }} />
              <Typography variant="h5" color={"#2d5cf7ff"}>
                20 {t("Mln")}
              </Typography>
              <Typography variant="p">
                {t("Workforce")}
              </Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <SchoolIcon style={{ fontSize: "70px", color: "#2d5cf7ff" }} />
              <Typography variant="h5" color={"#2d5cf7ff"}>
                99%
              </Typography>
              <Typography variant="p">
                {t("Literacy")}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Stack alignItems={"center"}>
              <PersonIcon style={{ fontSize: "70px", color: "#2d5cf7ff" }} />
              <Typography variant="h5" color={"#2d5cf7ff"}>
                29
              </Typography>
              <Typography variant="p">
                {t("Average")}
              </Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <PublicIcon style={{ fontSize: "70px", color: "#2d5cf7ff" }} />
              <Typography variant="h5" color={"#2d5cf7ff"}>
                83%
              </Typography>
              <Typography variant="p">
                {t("Internet_penetration")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
