import { Button, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material";
import { t } from "../../../utils/i18n";

export default function Login() {
    const theme = useTheme()
    return (
        <Container>
            <Stack style={{ flexDirection: "row", justifyContent: "center", gap:"10px", flexWrap: "wrap" }}>
                <Stack style={{ maxWidth:"400px"}}>
                    <Typography variant="h2" style={{color:"#4252ceff"}}>
                        {t("Login")}
                    </Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore obcaecati
                </Stack>
                <form>
                    <Stack sx={{width:{xs:"300px", md:"400px", lg:"500px" }}} style={{  padding: "20px", justifyContent: "end", gap: "20px" }}>
                        <TextField style={{ backgroundColor: theme.palette.background.default, borderRadius: "5px" }} variant="outlined" label="name" id="name" type="text" />
                        <TextField style={{ backgroundColor: theme.palette.background.default, borderRadius: "5px" }} variant="outlined" label="+998" id="+998" type="number" />
                        <TextField style={{ backgroundColor: theme.palette.background.default, borderRadius: "5px" }} variant="outlined" label="nnn@gmail.com" id="nnn@gmail.com" type="email" />
                        <TextField style={{ backgroundColor: theme.palette.background.default, borderRadius: "5px" }} variant="outlined" label="Descreption" id="nnn@gmail.com"
                            multiline            // textarea qilish uchun
                            rows={5} />
                        <Button variant="contained" type="submit">
                            Send
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Container>
    )
}
