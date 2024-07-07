import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getVideos } from '../services/api';
import VideoEntry from './VideoEntry';
import Pagination from './Pagination'; 

const VideoListContainer = styled.div`
  padding: 50px 0; 
`;
const HeadingSection = styled.div`
  margin-top: 75px; 
  text-align: center;
  padding-bottom: 20px;

  .subheading {
    font-size: 1.2em;
    color: #6c757d;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 20px;
    color: #343a40;
  }
`;
function VideoList({ limit = Infinity }) {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6; 

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getVideos();
        setVideos(response.slice(0, limit));
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [limit]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <VideoListContainer className="container">
      <div className="row justify-content-center pb-4">
        <HeadingSection className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading"></span>
          <h3 className="mb-4">የቪድዮ ጋርደኒንግ</h3>
        </HeadingSection>
      </div>
      <div className="row d-flex">
        {currentVideos.map(video => (
          <VideoEntry key={video.id} video={video} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </VideoListContainer>
  );
}

export default VideoList;
