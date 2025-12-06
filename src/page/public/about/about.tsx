import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import sliderimg2 from "../../../assets/img/import2.jpg";
import sliderimg1 from "../../../assets/img/industril.jpg";
import sliderimg3 from "../../../assets/img/navbg.jpg";
import { t } from "../../../utils/i18n";


export default function About() {
  const size = useMediaQuery("(max-width:848px)");
  const imgsize = useMediaQuery("(max-width:580px)");
  const imgsecond = useMediaQuery("(max-width:435px)");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 588,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 474,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box>
      <Container>
        <Stack>
          <Slider {...settings}>
            <Stack style={{ flexDirection: "row" }}>
              <Stack direction={"row"} alignItems={"center"} style={{ flexWrap: size ? "wrap" : "nowrap", justifyContent: size ? "center" : "space-between", gap: size ? "20px" : "0" }}  >
                <Stack style={{ maxWidth: "400px" }}>
                  <Typography variant="body1" style={{ padding: "5px", backgroundColor: "#ff0000e1", display: "inline-block", color: "#fff", fontWeight: "bold", borderTopRightRadius: "7px", borderTopLeftRadius: "7px", borderBottomRightRadius: "7px", maxWidth: "100px" }}>
                    {t("new")}
                  </Typography>
                  <Typography variant="h3" fontSize={"30px"}>
                    {t("industrial")}
                  </Typography>
                  <Typography variant="body1">
                    {t("Z")}
                  </Typography>
                  <Typography variant="body1" color="#1111ffff" mt={"7px"} ml={"5px"}>
                    {t("Statistikasi")}
                  </Typography>
                </Stack>

                <img style={{ maxWidth: imgsecond ? "280px" : imgsize ? "400px" : "550px", height: "400px", borderRadius: "10px", objectFit: "cover", paddingRight: "5px" }} src={sliderimg1} alt="img" />
              </Stack>
            </Stack>
            <Stack style={{ flexDirection: "row" }}>
              <Stack direction={"row"} alignItems={"center"} style={{ flexWrap: size ? "wrap" : "nowrap", justifyContent: size ? "center" : "space-between", gap: size ? "20px" : "0" }}  >
                <Stack style={{ maxWidth: "400px", }}>
                  <Typography variant="body1" style={{ padding: "5px", backgroundColor: "#ff0000e1", display: "inline-block", color: "#fff", fontWeight: "bold", borderTopRightRadius: "7px", borderTopLeftRadius: "7px", borderBottomRightRadius: "7px", maxWidth: "100px" }}>
                    {t("new")}
                  </Typography>
                  <Typography variant="h3" fontSize={"30px"}>
                    {t("Eksport")}
                  </Typography>
                  <Typography variant="body1">
                    {t("Texts")}
                  </Typography>
                  <Typography variant="body1" color="#1111ffff" mt={"7px"} ml={"5px"}>
                    {t("Eksports")}
                  </Typography>
                </Stack>
                <img style={{ maxWidth: imgsecond ? "280px" : imgsize ? "400px" : "550px", height: "400px", borderRadius: "10px", objectFit: "cover", paddingRight: "5px" }} src={sliderimg2} alt="img" />
              </Stack>
            </Stack>
            <Stack style={{ flexDirection: "row" }}>
              <Stack direction={"row"} alignItems={"center"} style={{ flexWrap: size ? "wrap" : "nowrap", justifyContent: size ? "center" : "space-between", gap: size ? "20px" : "0" }}  >
                <Stack style={{ maxWidth: "400px", }}>

                  <Typography variant="body1" style={{ padding: "5px", backgroundColor: "#ff0000e1", display: "inline-block", color: "#fff", fontWeight: "bold", borderTopRightRadius: "7px", borderTopLeftRadius: "7px", borderBottomRightRadius: "7px", maxWidth: "100px" }}>
                    {t("new")}
                  </Typography>
                  <Typography variant="h4" fontSize={"30px"}>
                    {t("Innovative")}
                  </Typography>
                  <Typography variant="body1">
                    {t("A")}
                  </Typography>
                  <Typography variant="body1" color="#1111ffff" mt={"7px"} ml={"5px"}>
                    {t("Smart")}
                  </Typography>
                </Stack>
                <img style={{ maxWidth: imgsecond ? "280px" : imgsize ? "400px" : "550px", height: "400px", borderRadius: "10px", objectFit: "cover", paddingRight: "5px" }} src={sliderimg3} alt="img" />
              </Stack>
            </Stack>


          </Slider>
        </Stack>
      </Container>

      <Stack
    style={{
          marginTop: 40,
          height: "auto",
          paddingBottom: "40px",
          display: "flex",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexWrap: "wrap",
          backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url(${sliderimg3})`,
          color: "#fff",
          paddingTop: "70px",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">
            {t("Work_with")}
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: "700px", mt: 2 }}>
            {t("Lorem")}
          </Typography>

          <Stack direction="row" gap={"20px"} textAlign={"center"}  justifyContent={"center"} flexWrap={"wrap"} spacing={4} mt={4}>
            <Stack>
              <Typography variant="h3" fontWeight="bold">
                12
              </Typography>
              <Typography variant="body1">{t("Offices_worldwide")}</Typography>
            </Stack>
            <Stack>
              <Typography variant="h3" fontWeight="bold">
                300+
              </Typography>
              <Typography variant="body1">{t("Full_time_colleagues")}</Typography>
            </Stack>
              <Stack>
                <Typography variant="h3" fontWeight="bold">
                  40
                </Typography>
                <Typography variant="body1">{t("Hours_per_week")}</Typography>
              </Stack>
              <Stack>
                <Typography variant="h3" fontWeight="bold">
                  Unlimited
                </Typography>
                <Typography variant="body1">{t("Paid_time_off")}</Typography>
              </Stack>
          </Stack>
        </Container>
      </Stack>

    </Box>
  )
}
