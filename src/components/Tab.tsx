import { TabButton } from "@/styles/Tab";

interface ITabProps {
    title: string,
    active: Boolean,
    onClick: React.MouseEventHandler
}

const Tab = (props: ITabProps) => {

    return (
        <TabButton className={props.active ? "active" : ""} onClick={props.onClick}>
            {props.title}
        </TabButton>
    )

}

export default Tab;