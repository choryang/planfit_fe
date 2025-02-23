import { createBrowserRouter} from "react-router-dom";
import FollowingTab from "./pages/community/tab/FollowingTab";
import BestTab from "./pages/community/tab/BestTab";
import ClubTab from "./pages/community/tab/ClubTab";
import Layout from "../layout/CommonLayout";
import Community from "./pages/community/Community";
import BestTabDetail from "./pages/best/BestTabDetail";
import BestPostDetail from "./pages/best/BestPostDetail";
import LikeList from "./pages/best/LikeList";
import Comment from "./pages/best/Comment";
import { commentLoader, postLikeLoader, postLoader, queryClient } from "../utils/loader";


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
                    loader: postLoader(queryClient)
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
            loader: postLoader(queryClient)
        },
        {
            path: "/best/detail/:id",
            element: <BestPostDetail />
        },
        {
            path: "/best/detail/:id/likes",
            element: <LikeList />,
            loader: postLikeLoader(queryClient)
        },
        {
            path: "/best/detail/:id/comments",
            element: <Comment />,
            loader: commentLoader(queryClient)
        },
    ],
  },
]);

export default router;
