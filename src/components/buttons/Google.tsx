
import Button from "@mui/material/Button"
import GoogleIcon from "@mui/icons-material/Google"
import "./Button.scss"

const Google = () => {
  return (
    <Button
      className="google-style"
      variant="outlined"
      color="primary"
      startIcon={<GoogleIcon />}
    >
      Continue with Google
    </Button>
  )
}

export default Google
