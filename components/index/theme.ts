import { createMuiTheme } from "@material-ui/core";

import { lightBlue, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(",")
    },
    palette: {
        primary: {
            main: orange["400"],
            contrastText: "#fff"
        },
        secondary: {
            main: lightBlue["500"]
        }
    }
});

export default theme;
