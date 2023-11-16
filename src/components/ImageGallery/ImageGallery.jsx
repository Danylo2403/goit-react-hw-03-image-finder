import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ imagesList }) => {
  return (
    <Gallery>
      {imagesList.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
          />
        );
      })}
    </Gallery>
  );
};