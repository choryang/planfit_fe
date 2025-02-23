export interface post {
    [key: string]: string | number
    id: number
    title: string
    content: string
    user_id: number
    like: number
    commnet: number
    image: string
    created_at_date: string
    created_at_time: string
}

export interface comment {
    [key: string]: string | number
    id: number
    post_id: number
    user_id: number 
    content: string
    like: number
    created_at_date: string
    created_at_time: string
}


export interface ITitle {
    title: string
}

export interface like {
    id: number
    post_id: number
    user_id: number
}


export interface user {
    id: number
}