import { Outlet } from "react-router-dom"
import { CommonLayout } from "@/styles/CommonLayout"

function Layout() {

  return (
    <CommonLayout>
        <Outlet />
    </CommonLayout>
  )
}

export default Layout