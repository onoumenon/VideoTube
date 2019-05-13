import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { searchYoutube } from "./api/youtube";
import VideoList from "./VideoList";
import WithErrorAndLoading from "./WithErrorAndLoading";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  state = { videos: [], selectedVideo: null, isLoading: false, error: null };

  componentDidMount() {
    this.onTermSubmit("javascript");
  }

  onTermSubmit = async term => {
    this.setState({ isLoading: true });
    try {
      const results = await searchYoutube(term);
      this.setState({
        isLoading: false,
        videos: results,
        selectedVideo: results[0]
      });
    } catch (err) {
      this.setState({ isLoading: false, error: err.message });
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {WithErrorAndLoading(
                this.state.isLoading,
                this.state.error,
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
