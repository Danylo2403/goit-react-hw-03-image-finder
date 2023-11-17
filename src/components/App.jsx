import React, { useState, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from 'utils/api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

const AppStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px',
};

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryWithoutId = query.slice(query.indexOf('/') + 1);
        setIsLoading(true);

        const fetchedImages = await fetchImages(queryWithoutId, page);

        setImages(prevImages => prevImages.concat(fetchedImages.hits));

        const shouldLoadMore =
          page < Math.ceil(fetchedImages.totalHits / 12);
        setPage(prevPage => (shouldLoadMore ? prevPage + 1 : prevPage));
      } catch (error) {
        toast.error('Something went wrong! Please, try again :(');
      } finally {
        setIsLoading(false);
      }
    };

    if (query.trim() !== '') {
      fetchData();
    }
  }, [query, page]);

  const handleSubmit = newQuery => {
    if (!newQuery.trim()) {
      toast.error('Enter something to search');
      return;
    }

    setImages([]);
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div style={AppStyle}>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      )}
      {images.length > 0 && <ImageGallery imagesList={images} />}
      {page > 1 && <Button handleClick={handleLoadMore} />}
      <Toaster />
    </div>
  );
};

export default App;
