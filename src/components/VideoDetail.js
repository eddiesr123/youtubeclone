import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	const { snippet, id } = video;
	const videoSrc = `https://www.youtube.com/embed/${id.videoId}`;
	return (
		<div>
			<div className="ui embed">
				<iframe src={videoSrc} title="video player" />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{snippet.title}</h4>
				<p>{snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
