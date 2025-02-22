import { useLoaderData, useParams } from "react-router-dom";
import TitleBar from "../../../components/TitleBar"
import UserListItem from "../../../components/best/UserListItem";
import { like, user } from "../../../interface/interface";
import { useEffect, useState } from "react";
import { ListContainer } from "../../../styles/UserListItem";

function LikeList() {
    const title = "응원";
    const { id } = useParams();
    const likes = useLoaderData().data;
    const [likeUsers, setLikeUsers] = useState([]);
    
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