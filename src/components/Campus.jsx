import { Cancel } from '@mui/icons-material';
import React, { useState } from 'react';
import Modal from 'react-modal';

import 'react-lazy-load-image-component/src/effects/blur.css';

Modal.setAppElement('#root');

const Campus = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const campusImages = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/Springdale_High_School%2C_Arkansas.JPG',
    'https://wehco.media.clients.ellingtoncms.com/img/photos/2015/09/09/72682081_Springdale-High-File_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d',
    'https://media.tegna-media.com/assets/KFSM/images/39096167-e937-4126-a551-0e539a9e975b/39096167-e937-4126-a551-0e539a9e975b_1920x1080.jpg',
    'https://har-bernhs.weebly.com/uploads/2/6/5/7/26574828/261266692.jpg',
    'https://cmsv2-assets.apptegy.net/uploads/2600/file/206293/3c262193-675a-4505-a71d-77fc6762c718.jpeg',
    'https://springdaleeducation.com/wp-content/uploads/2022/11/INFRASTRUCTURE-1.jpg',
  ];

  const campusVideos = [
    'https://www.youtube.com/embed/FUSJkqaHgYk?si=Nv40Vzc_Y4gA_7aO',
    'https://www.youtube.com/embed/SxoVEOt_muA?si=J72T9TXqAzM9Ob6P',
  ];

  const openImageModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % campusImages.length);
    setSelectedImage(campusImages[(currentImageIndex + 1) % campusImages.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + campusImages.length) % campusImages.length);
    setSelectedImage(campusImages[(currentImageIndex - 1 + campusImages.length) % campusImages.length]);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-4">
       

        <section>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-indigo-700">Campus Showcase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {campusImages.map((imageUrl, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => openImageModal(imageUrl)}
              >
                <img
                  src={imageUrl}
                  alt={`Campus Image ${index + 1}`}
                  className="w-full h-40 object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-semibold">Click to enlarge</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-indigo-700">Campus Video Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusVideos.map((videoUrl, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 "
                onClick={() => openVideoModal(videoUrl)}
              >
                <div className="h-[300px]">
                  <iframe
                    src={videoUrl}
                    title={`Campus Video ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-bold text-lg">▶ Click to play</p>
                </div>
              </div>
            ))}
          </div>
        </section>



        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeImageModal}
          contentLabel="Enlarged Image"
          className="modal flex flex-col items-center bg-dark bg-opacity-25 rounded-lg justify-center"
          overlayClassName="overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged Campus Image"
                className="max-h-full lg:w-[1000px] lg:h-[600px] w-[400px] h-[300px] object-cover rounded-xl shadow-lg"
              />
              <Cancel
                onClick={closeImageModal}
                className="absolute top-4 right-4 cursor-pointer text-white text-3xl bg-gray-700 bg-opacity-75 rounded-full p-1"
                style={{ fontSize: '2rem' }}
              />
              <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                &#10094;
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                &#10095;
              </button>
            </div>
          </div>
        </Modal>


  <Modal
  isOpen={!!selectedVideo}
  onRequestClose={closeVideoModal}
  contentLabel="Video Player"
  className="modal flex flex-col items-center bg-dark bg-opacity-25 rounded-lg justify-center"
  overlayClassName="overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
>
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      {selectedVideo && (
        <iframe
          src={selectedVideo}
          title="Campus Video"
          className="lg:w-[1000px] lg:h-[600px] w-[400px] h-[300px] rounded-xl"
          allowFullScreen
        ></iframe>
      )}
      <Cancel
        onClick={closeVideoModal}
        className="absolute top-4 right-4 cursor-pointer text-white text-3xl bg-gray-700 bg-opacity-75 rounded-full p-1"
        style={{ fontSize: '2rem' }}
      />
    </div>
  </div>
</Modal>

      </div>
    </div>
  );
}

export default Campus;