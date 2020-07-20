import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#f71ede',
      main: '#9933FF',
      dark: '#850968',
      contrastText: '#fff',
    },
    secondary: {
      light: '#85ff93',
      main: '#59c8ff',
      dark: '#20cbc0',
      contrastText: '#000',
    },
      openTitle: blueGrey['400'],
      protectedTitle: lightGreen['400'],
      type: 'light'
    }
  })

  export default theme