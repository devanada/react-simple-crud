import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Create extends React.Component {
  state = {
    formObj: {},
  };

  async componentDidMount() {
    // this.fetchData();
  }

  async handleChange(e) {
    this.setState({ value: e.target.value });
  }

  async handleSubmit(e) {
    axios
      .post("http://localhost:3001/api/tutorials/", this.state.formObj)
      .then((res) => {
        this.props.history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  }

  render() {
    const { formObj } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <legend>Create a new Contact</legend>
            <div>
              <label>First Name: </label>
              <input
                value={formObj.first_name}
                type="text"
                onChange={(e) =>
                  this.setState({
                    formObj: { ...formObj, first_name: e.target.value },
                  })
                }
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name: </label>
              <input
                value={formObj.last_name}
                type="text"
                onChange={(e) =>
                  this.setState({
                    formObj: { ...formObj, last_name: e.target.value },
                  })
                }
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Email: </label>
              <input
                value={formObj.email}
                type="text"
                onChange={(e) =>
                  this.setState({
                    formObj: { ...formObj, email: e.target.value },
                  })
                }
                placeholder="Email"
              />
            </div>
            <div>
              <label>Gender: </label>
              <input
                value={formObj.gender}
                type="text"
                onChange={(e) =>
                  this.setState({
                    formObj: { ...formObj, gender: e.target.value },
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

export default withRouter(Create);
