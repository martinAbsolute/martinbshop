import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import pink from '@material-ui/core/colors/pink'

export default createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: pink
  }
})