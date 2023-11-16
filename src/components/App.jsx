import { Component } from 'react';
import { Blocks } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from 'utils/api';
import {SearchBar} from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

const AppStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px',
};

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        const queryWithoutId = this.state.query.slice(
          this.state.query.indexOf('/') + 1
        );
        this.setState({ isLoading: true });

        const fetchedImages = await fetchImages(
          queryWithoutId,
          this.state.page
        );

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...fetchedImages.hits],
            loadMore: this.state.page < Math.ceil(fetchedImages.totalHits / 12),
          };
        });
      } catch (error) {
        toast.error('Something went wrong! Please, try again :(  ');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = query => {
    if (!query.trim()) {
      toast.error('Enter something to search');
      return;
    }
    this.setState(() => {
      return {
        images: [],
        query: `${Date.now()}/${query}`,
        page: 1,
      };
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { images, isLoading, loadMore } = this.state;
    return (
      <div style={AppStyle}>
        <SearchBar onSubmit={this.handleSubmit} />
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
        {loadMore && <Button handleClick={this.handleLoadMore} />}
        <Toaster />
      </div>
    );
  }
}