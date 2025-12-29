import { DehydratedState, UseMutateAsyncFunction } from "@tanstack/react-query";

interface QueryProps {
  isLoading: boolean;
  error: Error | null;
}

export interface InfiniteQueryProps<T> extends QueryProps {
  data: T[] | undefined | null;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}
export interface QueryArrayProps<T> extends QueryProps {
  data: T[] | undefined | null;
}
export interface QueryDefaultProps<T> extends QueryProps {
  data: T | undefined | null;
}

export type onErrorFn = (error: Error) => void;

interface MutationProps<TVariables = void> {
  mutateAsync: UseMutateAsyncFunction<any, Error, TVariables, unknown>;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
}

// First generic: type of data returned from mutation
// Second generic: type of variables required for mutation
export interface MutationArrayProps<T, TVariables = void>
  extends MutationProps<TVariables> {
  data: T[] | undefined | null;
}

// First generic: type of data returned from mutation
// Second generic: type of variables required for mutation
export interface MutationDefaultProps<T, TVariables = void>
  extends MutationProps<TVariables> {
  data: T | undefined | null;
}

export interface DehydratePrefetchQuery {
  props: {
    dehydratedState: DehydratedState;
  };
}
