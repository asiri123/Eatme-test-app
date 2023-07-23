import Button from "@mui/material/Button"
import "./Button.scss"

const ButtonMain = ({ icon:Icon, children, className }) => {
  return (
    <div>
      <Button
        className={`button ${className}`}
        variant="outlined"
        color="primary"
        startIcon={<Icon />}
      >
        {children}
      </Button>
    </div>
  )
}

export default ButtonMain
