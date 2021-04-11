import { queryCache } from 'react-query';

export const useCacheFromQuery = queryKey => queryCache.getQueryData(queryKey);
