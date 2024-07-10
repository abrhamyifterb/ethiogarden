import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoById, getVideosByCategory } from '../services/api';
import BlogHeader from './BlogHeader';
import VideoContent from './VideoContent';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Section = styled.section`
  padding: 50px 0;
`;

const Row = styled.div`
  display: flex;
  gap: 20px; 
`;

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const videoData = await getVideoById(id);
        setVideo(videoData);

        const allVideos = await getVideosByCategory(videoData.category.id);
        const related = allVideos.filter(v => v.id !== videoData.id).slice(0, 4);
        setRelatedVideos(related);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [id]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BlogHeader
        breadcrumbs={[
          { label: 'ዋና ገፅ', link: '/' },
          { label: 'የግብርና ትምርት በቪድዮ', link: '/video' },
          { label: `የግብርና ትምርት በቪድዮ - ${video.category.name}`, link: `/video/category/${video.category.id}` },
          { label: video.title, link: `/video/${video.id}` }
        ]}
      />
      <Section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <Row>
            <VideoContent content={video} isVideo />
            <Sidebar relatedPosts={relatedVideos} isVideo />
          </Row>
        </div>
      </Section>
    </div>
  );
};

export default VideoPage;