import { user } from "../../interface/interface"
import { UserItemProfile, UserItemWrapper } from "../../styles/UserListItem"
import { FollowButton } from "../FollowButton"


function UserListItem(props: user) {

    return (
        <UserItemWrapper>
            <div>
                <UserItemProfile>
                    <img src="/sample-image.jpeg" alt="profile image"/>
                    <span>{props.id}</span>
                </UserItemProfile>
                <FollowButton>팔로우</FollowButton>
            </div>
        </UserItemWrapper>
    )
}

export default UserListItem