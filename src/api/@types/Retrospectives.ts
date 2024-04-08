import { TOrder, TStatus } from './@asConst';

// get
export interface GetRetrospectiveRequest {
  page: number;
  size: number;
  order: TOrder;
  status: TStatus;
  keyword: string;
  isBookmarked: boolean;
  userId: number;
}

export interface GetRetrospectiveData {
  totalCount: number;
  nodes: Array<RetrospectiveResponse>;
}

//post
export interface PostRetrospectivesRequest {
  title: string;
  teamId: number;
  userId: number;
  templateId: number;
  status: TStatus;
  thumbnail: string;
  startedDate: string;
}

export interface PostRetrospectivesResponse {
  id: number;
  title: string;
  teamId: number;
  userId: number;
  templateId: number;
  status: TStatus;
  thumbnail: string;
}

//delete
export interface DeleteRetrospectiveRequest {
  retrospectiveId: number;
  userId: number;
}

//put
export interface PutRetrospectiveRequest {
  title: string;
  teamId?: string;
  userId: number;
  description: string;
  status: TStatus;
  thumbnail?: string;
}

export interface RetrospectiveResponse {
  id: number;
  title: string;
  userId: number;
  teamId: number;
  templateId: number;
  status: TStatus;
  isBookmarked: boolean;
  thumbnail: string;
  startDate: string;
  createdDate: string;
  updatedDate: string;
}

export interface RetrospectivesClient {
  create(request: PostRetrospectivesRequest): Promise<PostRetrospectivesResponse>;
  get(request: GetRetrospectiveRequest): Promise<GetRetrospectiveData>;
  delete(request: DeleteRetrospectiveRequest): Promise<void>;
  put(request: PutRetrospectiveRequest): Promise<RetrospectiveResponse>;
}
