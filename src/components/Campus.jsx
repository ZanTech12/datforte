import { Cancel } from '@mui/icons-material';
import React, { useState } from 'react';
import Modal from 'react-modal';
import img1 from "../assets/sch1.jpg"
import img2 from "../assets/sch2.jpg"
import img3 from "../assets/sch3.jpg"
import img4 from "../assets/sch4.jpg"
import img5 from "../assets/sch5.jpg"
import img6 from "../assets/sch6.jpg"


import 'react-lazy-load-image-component/src/effects/blur.css';

Modal.setAppElement('#root');

const Campus = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const campusImages = [
    img1, img2, img3, img4, img5,  img6,
   
  ];

  const campusVideos = [
    'https://www.youtube.com/embed/dDU3FVPurQs?si=VXeJsxPdRx0Tl5P-',
    'https://www.youtube.com/embed/R-50amaWCdg?si=DYhpAnlRMWXVu035',
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
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-indigo-700">School Showcase</h2>
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
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-indigo-700">School Video Showcase</h2>
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