import { Outlet, useNavigate } from "react-router-dom"
import TopAppBar from "@/components/TopAppBar"
import { TabBox } from "@/styles/Tab"
import Tab from "@/components/Tab"
import { useState } from "react"

function Community() {

    const tabMenu = [
        {id: 0, title: "팔로잉", path: "following"},
        {id: 1, title: "인기", path: "best"},
        {id: 2, title: "클럽", path: "club"},
    ]

    const [activeTab, setActiveTab] = useState(tabMenu[1].id);
    const navigate = useNavigate();

    const handleTabClick = (id: number, path: string) => {
        setActiveTab(id);
        navigate(`/${path}`, {replace: true});
    }

    return (
    <>
        <div>
            <TopAppBar title="커뮤니티" />
            <TabBox>
            {tabMenu.map((tab, index) => {
                return <Tab 
                            key={index} 
                            title={tab.title} 
                            onClick={() => handleTabClick(tab.id, tab.path)}
                            active={activeTab === tab.id}
                        />
            })}
            </TabBox>
        </div>
        <Outlet />
    </>
    )
}

export default Community