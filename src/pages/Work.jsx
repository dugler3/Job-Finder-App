import { useState } from 'react';
import Pagination from '../components/layout/Pagination/Pagination';
import Wrapper from '../components/layout/Wrapper';
import OfferCard from '../components/UI/OfferCard';
import { useGetAllOffersQuery } from '../services/apiSlice';

const Work = () => {
  const [page, setPage] = useState(1);
  const pageChangeHandler = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  const { data, error, isFetching } = useGetAllOffersQuery(page);

  return (
    <>
      <Wrapper>
        {error ? (
          <>Kurwa, Marian...</>
        ) : isFetching ? (
          <>Loading...</>
        ) : data ? (
          data.results.map((offer) => {
            return <OfferCard key={offer.id} details={offer} />;
          })
        ) : null}
        {data && (
          <Pagination
            pageChangeHandler={pageChangeHandler}
            numPages={Math.ceil(data.count / 10)}
          />
        )}
      </Wrapper>
    </>
  );
};

export default Work;
