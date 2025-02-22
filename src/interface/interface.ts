export interface post {
    [key: string]: string | number
    image: string
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