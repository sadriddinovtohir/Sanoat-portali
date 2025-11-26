import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material";

export default function Login() {
    const theme = useTheme()
    return (
        <Container>
            <Stack style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Stack>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore obcaecati
                </Stack>
                <form>
                    <Stack style={{ width: "400px", padding: "20px", justifyContent: "end", gap: "20px" }}>
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
