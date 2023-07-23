import React from "react"
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined"
import "./InfoButton.scss"

interface InfoButtonProps {
  icon: any
  mainText: any
  description: any
  onItemClick?: () => void
}

const InfoButton: React.FC<InfoButtonProps> = (props: InfoButtonProps) => {
  return (
    <div className="main-button-container" onClick={() => props.onItemClick}>
      <div className="first-icon-container">{props.icon}</div>
      <div className="second-icon-container">
        <div className="header-text">{props.mainText}</div>
        <div className="description-text-line">{props.description}</div>
      </div>
      <div className="third-icon-container">
        <ChevronRightOutlinedIcon style={{ color: "#00ccbc" }} />
      </div>
    </div>
  )
}

export default InfoButton
