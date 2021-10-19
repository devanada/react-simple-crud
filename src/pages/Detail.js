import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Detail extends React.Component {
  state = {
    isLoading: false,
    userDetail: {},
  };

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { params } = this.props.match;
    axios
      .get("http://localhost:3001/api/tutorials/" + params.id)
      .then((res) => {
        const { data } = res;
        this.setState({ userDetail: data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: true }));
  }

  render() {
    const { isLoading, userDetail } = this.state;
    if (isLoading) {
      return (
        <div>
          <p>First Name: {userDetail.first_name}</p>
          <p>last Name: {userDetail.last_name}</p>
          <p>Email: {userDetail.email}</p>
          <p>Gender: {userDetail.gender}</p>
        </div>
      );
    } else {
      return <p>Loading</p>;
    }
  }
}

export default withRouter(Detail);
