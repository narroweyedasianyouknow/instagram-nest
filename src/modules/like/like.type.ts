import type { PostType } from '$module/post/post.type';
import type { UserType } from '$module/user/user.type';

export class LikeType {
    id: string;

    post_id: PostType['permalink'];

    profile_picture: UserType['profile_picture'];

    username: UserType['username'];
}
