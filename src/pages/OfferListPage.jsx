import { useState } from 'react';
import Pagination from '../components/layout/Pagination/Pagination';
import Wrapper from '../components/layout/Wrapper';
import OfferListCard from '../components/UI/Offer List/OfferListCard';
import { useGetAllOffersQuery } from '../services/apiSlice';
import Loader from '../components/layout/Loader/Loader';

const OfferListPage = () => {
  const [page, setPage] = useState(1);

  const pageChangeHandler = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  const { data, error, isFetching } = useGetAllOffersQuery(page);

  const offerFinder = (id) => {
    return data.results.find((el) => el.id === id);
  };

  return (
    <>
      <Wrapper>
        {error ? (
          <>Kurwa, Marian...</>
        ) : isFetching ? (
          <Loader />
        ) : data ? (
          data.results.map((offer) => {
            return (
              <OfferListCard
                key={offer.id}
                details={offer}
                page={page}
                offerFinder={offerFinder}
              />
            );
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

export default OfferListPage;
