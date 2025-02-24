import { useParams } from "react-router-dom";
import TitleBar from "@/components/TitleBar"
import UserListItem from "@/components/best/UserListItem";
import { like, user } from "@/interface/interface";
import { useEffect, useState } from "react";
import { ListContainer } from "@/styles/UserListItem";
import useLikeStore from "@/store/likeStore";

function LikeList() {
    const title = "응원";
    const { id } = useParams();
    const [likeUsers, setLikeUsers] = useState<like[]>([]);
    const { likes } = useLikeStore();
    
    useEffect(() => {
        const likes_users = likes.filter((like: like) => like.post_id === Number(id));
        setLikeUsers(likes_users);
    }, []);
   

    return (
        <>
            <TitleBar title={title} />
            <ListContainer>
                {likeUsers.map((like: like) => {
                    const user: user = {id: like.user_id};
                    return <UserListItem {...user}/>
                })}
            </ListContainer>
        </>
    )
}

export default LikeList