import React from "react";
import YouTube from "react-youtube";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import "../App.css"

const mapStateToProps = (state) => ({
  videos: state.youtube.videos,
  favorite: state.favorite.collection,
});



class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <>
        <Carousel id="carouselExampleControls">
          {(this.props.favorite.length>0 &&this.props.videos) &&
            this.props.videos.items.map((video) => (
              <Carousel.Item className="carouselItem">
                <YouTube
                  videoId={video.id.videoId}
                  opts={opts}
                  onReady={this._onReady}
                  className="youtubeVideo"
                />
                
              </Carousel.Item>
            ))}
        </Carousel>
      </>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default connect(mapStateToProps)(YoutubeVideo);
