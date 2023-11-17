import React, { Component } from 'react';
import {Modal} from 'components/Modal/Modal';
import { ImageItem, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL } = this.props;

    return (
      <>
        <ImageItem onClick={this.openModal}>
          <Image src={webformatURL} alt="This is the result of your search" />
        </ImageItem>
        {isModalOpen && (
          <Modal
            imageUrl={largeImageURL}
            isModalOpen={isModalOpen}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
