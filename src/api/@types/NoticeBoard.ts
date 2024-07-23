// get
// 게시글 목록 조회
export interface GetNoticeListRequest {
  page: number;
  size: number;
}

export interface GetNoticeListResponse {
  code: number;
  message: string;
  data: GetNoticeListData;
}

export interface GetNoticeListData {
  posts: GetNoticeListPosts[];
  totalPages: number;
}

export interface GetNoticeListPosts {
  id: number;
  title: string;
  content: string;
  status: 'PUBLISHED';
  createdDate: string;
  modifiedDate: string;
  views: number;
}

// 개별 게시글 조회
export interface GetNoticePostsRequest {
  id: number;
}

export interface GetNoticePostsResponse {
  code: number;
  message: string;
  data: GetNoticePostsData;
}

export interface GetNoticePostsData {
  title: string;
  content: string;
  status: string;
  createdDate: string;
  modifiedDate: string;
  views: number;
}

//post
export interface PostNoticeRequest {
  title: string;
  content: string;
  status: 'PUBLISHED' | 'TEMP';
}

export interface PostNoticeResponse {
  code: number;
  message: string;
  data: PostNoticeData;
}

export interface PostNoticeData {
  title: string;
  content: string;
  status: string;
  createdDate: string;
  modifiedDate: string;
  views: number;
}

export interface PostNoticeTempPostsRequest {
  title: string;
  content: string;
}

export interface PostNoticeTempPostsResponse {
  code: number;
  message: string;
  data: PostNoticeTempPostsData;
}

export interface PostNoticeTempPostsData {
  title: string;
  content: string;
  status: string;
  createdDate: string;
  modifiedDate: string;
  views: number;
}

export interface PostNoticePresignedURLRequest {
  filename: string;
  method: 'GET' | 'PUT';
}

export interface PostNoticePresignedURLResponse {
  code: number;
  message: string;
  data: PostNoticePresignedURLData;
}

export interface PostNoticePresignedURLData {
  filename: string;
  preSignedUrl: string;
}

// put
export interface PutNoticeRequest {
  id: number;
  title: string;
  content: string;
  status: string;
}

export interface PutNoticeResponse {
  code: number;
  message: string;
  data: PutNoticeData;
}

export interface PutNoticeData {
  title: string;
  content: string;
  status: string;
  createdDate: string;
  modifiedDate: string;
  views: number;
}

// delete
export interface DeleteNoticeRequest {
  id: number;
}

// export interface DeleteNoticeResponse {
//   code: number;
// }

export interface NoticeBoardClient {
  listGet(request: GetNoticeListRequest): Promise<GetNoticeListResponse>;
  postsGet(request: GetNoticePostsRequest): Promise<GetNoticePostsResponse>;
  create(request: PostNoticeRequest): Promise<PostNoticeResponse>;
  tempSave(request: PostNoticeTempPostsRequest): Promise<PostNoticeTempPostsResponse>;
  Img(request: PostNoticePresignedURLRequest): Promise<PostNoticePresignedURLResponse>;
  revise(request: PutNoticeRequest): Promise<PutNoticeResponse>;
  delete(request: DeleteNoticeRequest): Promise<void>;
}