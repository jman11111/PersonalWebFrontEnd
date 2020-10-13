import React, { Component } from "react";

class SearchForm extends Component {
  //Use object for errors so you dont have to search through array for correct error to display
  state = {
    data: { searchphrase: "" },
    errors: {},
  };

  componentDidMount() {
    //this.username.current.focus()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchphrase } = this.state.data;
    this.props.onSearchSubmit(searchphrase);
  };

  handleChange = ({ currentTarget: input }) => {
    //BEST PRACTICE, clone state then manipulate it.
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    const { className } = this.props;
    const { searchphrase } = this.state.data;
    return (
      <div className={className}>
        <form className="row" onSubmit={this.handleSubmit}>
          <div className="form-group col-8">
            <label htmlFor="search">Search</label>
            <input
              value={searchphrase}
              onChange={this.handleChange}
              type="text"
              name="searchphrase"
              id="search"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary col-4">Apply</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
