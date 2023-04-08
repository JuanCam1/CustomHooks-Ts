import { useCallback, useMemo, useState } from 'react';

const usePagination = <T extends any>(info: T[], volume: number = 10) => {
  const totalPages = useMemo(() => Math.floor(info.length / volume), [
    volume,
    info.length
  ]);

  const [page, setPage] = useState(0);
  
  const slicedData = useMemo(
    () => info.slice(page * volume, page * volume + volume),
    [volume, page]
  );

  const onNextPage = useCallback(() => {
    setPage((prevState: number) => {
      if (prevState < totalPages) {
        return prevState + 1;
      }
      return prevState;
    });
  }, [totalPages]);

  // Previous page handler.
  const onPrevPage = useCallback(() => {
    setPage((prevState: number) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return prevState;
    });
  }, []);

  return { info: slicedData, page, totalPages, setPage,onNextPage,onPrevPage };
};

export default usePagination;