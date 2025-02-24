import { useNavigate } from "react-router-dom";
import { TitleBarWrapper } from "@/styles/TitleBar";
import { ITitle } from "@/interface/interface";

function TitleBar(props: ITitle) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <TitleBarWrapper>
            <img onClick={handleClick} src="/ic-chevron-backward.png" alt="backward" />
            <span>{props.title}</span>
            <img style={{visibility: "hidden"}}/>
        </TitleBarWrapper>
    )
}

export default TitleBar;