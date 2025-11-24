import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i18n, { t } from '../../utils/i18n';
import { loadState, saveState } from '../../configs/localStorej/localstorej';
import enUrl from "../../assets/img/uk.png";
import ruUrl from "../../assets/img/rus.png";
import uzUrl from "../../assets/img/uzb.png";
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

export default function BasicSelect() {
    
  const Headertopsize = useMediaQuery(("max-width:405px"))
    const [lang, setlang] = useState(loadState("lang") || "en")
    useEffect(() => {
        i18n.changeLanguage(lang);

    }, [lang])
    const handleChange = (value: any) => {
        const newlang = value.target.value;
        setlang(newlang);
        saveState("lang", newlang);
    };


    return (
        <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t("Lang")}</InputLabel>
                <Select
                    sx={{
                        height: 40,
                        width: "100px",
                        textOverflow: "clip",
                        "& .MuiSelect-select": {
                            padding: "2px 10px",
                            paddingTop: "10px",
 textOverflow: "clip",
                        },
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    
                    value={loadState("lang") || "en"}
                    label="En"
                    onChange={handleChange}
                >
                    <MenuItem value={"en"}>

                        <img style={{  textOverflow: "clip", width: "30px" }} src={enUrl} alt="en" />
                    </MenuItem>
                    <MenuItem value={"ru"}>

                        <img style={{  textOverflow: "clip", width: "30px" }} src={ruUrl} alt="ru" />
                    </MenuItem>
                    <MenuItem value={"uz"}>

                        <img style={{  textOverflow: "clip", width: "30px" }} src={uzUrl} alt="uz" />
                    </MenuItem>
                </Select>
                
            </FormControl>
        </Box>
    );
}
