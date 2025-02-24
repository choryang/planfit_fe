import { useLoaderData, useLocation } from "react-router-dom";
import TitleBar from "@/components/TitleBar"
import {MemoizedPostCard} from "@/components/best/PostCard";
import { post } from "@/interface/interface";
import { PostCardsContainer } from "@/styles/bestTab/PostCard";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function BestTabDetail() {

    const title = "인기탭";
    const posts = useLoaderData().data;
    const location = useLocation();
    const clickedPost = location.state;
    const [list, setList] = useState<post[]>([]);
    const [ref, inView] = useInView();
    const [ hasMore, setHasMore ] = useState(true);

    const [ page, setPage ] = useState(0);
    const limit = 5;
    
    const fetchMoreItems = (page: number) => {
        const sliced = posts.slice(limit * page, limit * page + limit - 1);
        const newList = [...list];
        sliced.map((sliced: post) => newList.push(sliced));
        setList(newList);
        setPage(page => page + 1);

        if(limit * page + limit > posts.length) {
            setHasMore(false);
        }
    }

    useEffect(() => {

        const sliced = posts.slice(0, limit - 1);
        sliced.unshift(clickedPost);
        setList(sliced);
        setPage(page => page + 1);
        
    }, [])
    


    useEffect(() => {
        if (inView && hasMore) {
            fetchMoreItems(page);
        }
    }, [inView]);

    return (
        <>
            <TitleBar title={title}/>
            <PostCardsContainer>
                {list.map((post: post) => {
                    return <MemoizedPostCard {...post} />
                })}
                <div ref={ref}></div>
            </PostCardsContainer>
        </>
    )
}

export default BestTabDetail