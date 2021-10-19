import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Update extends React.Component {
  state = {
    userDetail: {},
    isReady: false,
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
      .finally(() => this.setState({ isReady: true }));
  }

  async handleChange(e) {
    this.setState({ value: e.target.value });
  }

  async handleSubmit(e) {
    const { params } = this.props.match;
    axios
      .put(
        "http://localhost:3001/api/tutorials/" + params.id,
        this.state.userDetail
      )
      .then((res) => {
        this.props.history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  }

  render() {
    const { userDetail, isReady } = this.state;
    if (!isReady) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <legend>Update a Contact</legend>
            <div>
              <label>First Name: </label>
              <input
                value={userDetail.first_name}
                type="text"
                onChange={(e) =>
                  this.setState({
                    userDetail: { ...userDetail, first_name: e.target.value },
                  })
                }
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name: </label>
              <input
                value={userDetail.last_name}
                type="text"
                onChange={(e) =>
                  this.setState({
                    userDetail: { ...userDetail, last_name: e.target.value },
                  })
                }
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Email: </label>
              <input
                value={userDetail.email}
                type="text"
                onChange={(e) =>
                  this.setState({
                    userDetail: { ...userDetail, email: e.target.value },
                  })
                }
                placeholder="Email"
              />
            </div>
            <div>
              <label>Gender: </label>
              <input
                value={userDetail.gender}
                type="text"
                onChange={(e) =>
                  this.setState({
                    userDetail: { ...userDetail, gender: e.target.value },
                  })
                }
                placeholder="gender"
              />
            </div>
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Update);
