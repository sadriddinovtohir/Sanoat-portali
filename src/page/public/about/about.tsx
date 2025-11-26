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
      <Stack pt={"40px"}>
        <Stack justifyContent={"center"} alignItems={"center"} style={{ height: "800px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",  backgroundImage: `url(${sliderimg3})` }}>
      </Stack>
      </Stack>
    </Box>
  )
}
