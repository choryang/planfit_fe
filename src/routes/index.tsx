import { createBrowserRouter} from "react-router-dom";
import FollowingTab from "./pages/community/tab/FollowingTab";
import BestTab from "./pages/community/tab/BestTab";
import ClubTab from "./pages/community/tab/ClubTab";
import Layout from "../layout/CommonLayout";
import Community from "./pages/community/Community";
import client from "../utils/axios";
import BestTabDetail from "./pages/best/BestTabDetail";
import BestPostDetail from "./pages/best/BestPostDetail";
import LikeList from "./pages/best/LikeList";


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
                    loader: () => {     
                        return client.get("/data/posts.json");
                    }
                },
                {
                    path: "/club",
                    element: <ClubTab />,
                },
            ]
        },
        {
            path: "/best/best_tab",
            element: <BestTabDetail />,
            loader: () => {     
                return client.get("/data/posts.json");
            }
        },
        {
            path: "/best/detail/:id",
            element: <BestPostDetail />
        },
        {
            path: "/best/detail/:id/likes",
            element: <LikeList />,
            loader: () => {     
                return client.get("/data/likes.json");
            }
        },
        
    ],
  },
]);

export default router;
