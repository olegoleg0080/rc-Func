import { Button } from "@mui/material";
import { BtnTheme, Page} from "./Theme.styled";
import { useLocalStorageTheme } from "hooks/useLocalStorage";

function Theme() {
    const [value, setValue] = useLocalStorageTheme("theme", "dark");
    const handleClick = () => {
        setValue((state) => (state === "dark" ? "light" : "dark"));
    };
    return (
        <Page theme={value}>
            <BtnTheme onClick={handleClick} theme={value}>
                Change Theme
            </BtnTheme>
            <Button sx={{ border: "1px solid dark.main",fontSize: "16px", color: "dark.main", ":hover": {bgcolor: "dark.main", color:"light.main", border: "1px solid red"} }}>
                Hello
            </Button>
        </Page>
    );
}

export default Theme;
