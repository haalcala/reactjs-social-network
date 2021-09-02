export type PostType = {
    id: number;
    desc: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
};

export type UserType = {
    id: number;
    profilePicture: string;
    username: string;
};

function getNewUserType(id: number, profilePicture: string, username: string): UserType {
    return { id, profilePicture, username };
}

export const Users: UserType[] = [
    getNewUserType(1, "assets/person/1.png", "User1111"),
    getNewUserType(2, "assets/person/2.png", "User2222"),
    getNewUserType(3, "assets/person/3.png", "User3333"),
    getNewUserType(4, "assets/person/4.png", "User4444"),
    getNewUserType(5, "assets/person/5.png", "User5555"),
    getNewUserType(6, "assets/person/6.png", "User6666"),
    getNewUserType(7, "assets/person/7.png", "User7777"),
    getNewUserType(8, "assets/person/8.png", "User8888"),
    getNewUserType(9, "assets/person/9.png", "User9999"),
];

function getNewPostType(
    id: number,
    desc: string,
    photo: string,
    date: string,
    userId: number,
    like: number,
    comment: number
): PostType {
    return {
        id,
        desc,
        photo,
        date,
        userId,
        like,
        comment,
    };
}

export const Posts: PostType[] = [
    getNewPostType(1, "post1 desc", "assets/post/1.jpg", "1 min ago", 1, 2, 9),
    getNewPostType(2, "post2 desc", "assets/post/1.jpg", "1 day ago", 2, 100, 99),
];
