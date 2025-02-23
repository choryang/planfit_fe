import { useEffect, useState } from "react";
import {MemoizedFeedBox} from "../../../../components/best/FeedBox";
import { post } from "../../../../interface/interface";
import { ContentContainer } from "../../../../styles/bestTab/BestTab"
import { useLoaderData } from "react-router-dom"
import { useInView } from "react-intersection-observer";

function BestTab() {
    const [ref, inView] = useInView();

    const posts = useLoaderData().data;
    const limit = 10;
    const [ list, setList ] = useState<post[]>([]);
    const [ page, setPage ] = useState(0);
    const [ hasMore, setHasMore ] = useState(true);

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
        setList(sliced);
        setPage(page => page + 1);

    }, [])

    
    useEffect(() => {
        if (inView && hasMore) {
            fetchMoreItems(page);
        }   
    }, [inView]);


    return (
        <ContentContainer>
            {list.map((post: post, index) => {
                return <MemoizedFeedBox  key={index} {...post} />
            })}
            <div ref={ref}></div>
        </ContentContainer>
    )
}

export default BestTab