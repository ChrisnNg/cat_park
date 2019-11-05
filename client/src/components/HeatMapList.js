import React from "react";

import axios from "axios";

export default class HeatMapList extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8001/Data/Crime/`).then(res => {
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
    return (
      <section>
        {this.state.data.map(data => (
          <p>
            {data.Geom.lat}, {data.Geom.lng}
          </p>
        ))}
      </section>
    );
  }
}
