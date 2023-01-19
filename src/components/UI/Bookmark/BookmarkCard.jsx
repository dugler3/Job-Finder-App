import { useState } from 'react';
import Wrapper from '../../layout/Wrapper/Wrapper';
import NoBookmarkCard from '../NoBookmarkPage/NoBookmarkCard';
import OfferCard from '../Offer/OfferCard';

const BookmarkCard = () => {
  const [isToggled, setIsToggled] = useState(true);

  let items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    items.push(JSON.parse(localStorage.getItem(key)));
  }
  console.log(items);

  const bookmarkHandler = () => {
    !isToggled && localStorage.setItem(state.id, JSON.stringify(state));
    isToggled && localStorage.removeItem(state.id);
    setIsToggled((prevState) => !prevState);
  };

  return (
    <>
      <Wrapper>
        {items.length ? (
          items.map((state) => {
            return <OfferCard key={state.id} state={state} />;
          })
        ) : (
          <NoBookmarkCard />
        )}
      </Wrapper>
    </>
  );
};
export default BookmarkCard;
