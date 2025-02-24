import { ControlBtn, TopAppBarContainer, TopBarControl } from "@/styles/TopAppBar";

interface ITopAppBarProps {
    [key: string]: string
}

function TopAppBar(props: ITopAppBarProps) {
    return (    
        <TopAppBarContainer>
            {props.title}
            <TopBarControl>
                <ControlBtn><img src="/ic-person-badge-search.png"/></ControlBtn>
                <ControlBtn><img src="/ic-bell.png"/></ControlBtn>
                <ControlBtn><img src="/ic-plus-circle.png"/></ControlBtn>
            </TopBarControl>
        </TopAppBarContainer>
    )
}

export default TopAppBar;