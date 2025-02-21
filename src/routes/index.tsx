import { createBrowserRouter} from "react-router-dom";
import FollowingTab from "./pages/community/tab/FollowingTab";
import BestTab from "./pages/community/tab/BestTab";
import ClubTab from "./pages/community/tab/ClubTab";
import Layout from "../layout/CommonLayout";
import Community from "./pages/community/Community";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
        {
            element: <Community />,
            children: [
                {   
                    path: "/",
                    element: <FollowingTab />,
                },
                {   
                    path: "/following",
                    element: <FollowingTab />,
                },
                {
                    path: "/best",
                    element: <BestTab />,
                },
                {
                    path: "/club",
                    element: <ClubTab />,
                },
            ]
        },
        
    ],
  },
]);

export default router;
