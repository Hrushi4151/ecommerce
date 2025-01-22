import { useState } from 'react';

const AddToFavorites = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = async () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={handleFavorite} className="favorite-button">
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default AddToFavorites;
