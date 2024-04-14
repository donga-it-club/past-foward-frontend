import { Status } from '../@types/@asConst';
import { RetrospectiveResponse } from '../@types/Retrospectives';

export const MockRetrospective: RetrospectiveResponse = {
  code: 202,
  message: 'success',
  data: {
    id: 0,
    title: 'hee',
    userId: 0,
    teamId: 0,
    templateId: 1,
    status: Status.NOT_STARTED,
    isBookmarked: true,
    thumbnail: '3fa85f64',
    startDate: '2024-04-12T04:20:54.835Z',
    createdDate: '2024-04-12T04:20:54.835Z',
    updatedDate: '2024-04-12T04:20:54.835Z',
  },
};
