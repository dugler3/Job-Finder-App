import { useState } from 'react';
import Pagination from '../components/layout/Pagination/Pagination';
import Wrapper from '../components/layout/Wrapper/Wrapper';
import OfferListCard from '../components/UI/Offer List/OfferListCard';
import { useGetAllOffersQuery } from '../services/apiSlice';
import Loader from '../components/layout/Loader/Loader';
import Search from '../components/layout/Search/Search';
import ErrorPage from './ErrorPage';

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
      <Search />
      <Wrapper>
        {error ? (
          <ErrorPage />
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
        {data && !isFetching && (
          <Pagination
            pageChangeHandler={pageChangeHandler}
            pageCount={Math.ceil(data.count / 10)}
            page={page}
          />
        )}
      </Wrapper>
    </>
  );
};

export default OfferListPage;
