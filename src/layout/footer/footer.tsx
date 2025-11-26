// import { Container } from "@mui/material";
// import {  Stack } from "@mui/material";
// import {  Typography } from "@mui/material";
// import {  useTheme } from "@mui/material";


// import TelegramIcon from '@mui/icons-material/Telegram';
// import PhoneIcon from '@mui/icons-material/Phone';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { Link } from "react-router-dom";
// import { Label } from "@mui/icons-material";

// export default function Footer() {
//   const theme = useTheme()
//   return (
//     <Container>
//       <Stack style={{ padding: "20px", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
//         <Typography variant="body1" style={{ fontSize: "10px", maxWidth: "300px" }} >
//           <b style={{ color: "blue" }}> International Trade Administration,</b> U.S. Department of Commerce
//           1401 Constitution Ave NW, Washington, DC 20230
//         </Typography>=
//         <Stack style={{ flexDirection: "row", gap: "15px", marginTop: "10px" }}>
//           <Label>
//             <Link style={{ color: theme.palette.info.main }} target="_blank" to="https://telegram.org/">
//             <TelegramIcon />
//           </Link>
//           </Label>
//          <Label>
//            <Link style={{ color: theme.palette.info.main }} target="_blank" to="tel:+901283307">
//             <PhoneIcon />
//           </Link>
//          </Label>
//          <Label>
//            <Link style={{ color: theme.palette.info.main }} target="_blank" to="https://www.instagram.com/tohirbek_sadriddinov/">
//             <InstagramIcon />
//           </Link>
//          </Label>
//         </Stack>
//       </Stack>
//     </Container>
//   )
// }

import { Container, Stack, Typography, useTheme } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const theme = useTheme();

  return (
    <Container component="footer" sx={{ py: 3 }}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: "12px", maxWidth: "300px", lineHeight: 1.5 }}
        >
          <b style={{ color: theme.palette.primary.main }}>
            International Trade Administration,
          </b>{" "}
          U.S. Department of Commerce,
          1401 Constitution Ave NW, Washington, DC 20230
        </Typography>

        {/* Social Icons */}
        <Stack sx={{ flexDirection: "row", gap: "15px" }}>
          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            style={{ color: theme.palette.info.main }}
          >
            <TelegramIcon fontSize="medium" />
          </a>

          <a
            href="tel:+901283307"
            aria-label="Phone number +901283307"
            style={{ color: theme.palette.info.main }}
          >
            <PhoneIcon fontSize="medium" />
          </a>

          <a
            href="https://www.instagram.com/tohirbek_sadriddinov/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: theme.palette.info.main }}
          >
            <InstagramIcon fontSize="medium" />
          </a>
        </Stack>
      </Stack>
    </Container>
  );
}
