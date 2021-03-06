import React, { Component } from "react";
import Header from "./common/header";
import ThumbnailCard from "./common/thumbnailcard";
import Paginator from "./common/pagination";
import { paginate } from "./../util/paginate";
import SortBy from "./common/sortBy";
import _ from "lodash";
import GridGenerator from "./common/gridGenerator";
import SearchForm from "./common/searchForm";
import axios from "axios";
import Dropdown from "./common/dropdown";

class Sculptures extends Component {
  state = {
    pageSize: 6,
    currentPage: 1,
    sculptures: [],
    years: [],
    selectedYear: { name: "All Time" },
    sortOptions: [],
    searchPhrase: "",
    selectedSortOption: { path: "dateMade", order: "desc" },
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (currentSortOption) => {
    this.setState({ selectedSortOption: currentSortOption });
  };

  handleYearSelect = (year) => {
    this.setState({ selectedYear: year, currentPage: 1 });
  };

  async componentDidMount() {
    //const { data: posts } = await axios.get();
    console.log(this.state.sculptures);
    this.setState({
      years: [{ name: "All Time" }, ...this.getYears()],
      sortOptions: [...this.getSortOptions()],
      sculptures: await this.getSculptures(),
    });
    console.log(this.state.sculptures);
  }

  getYears() {
    return [
      { _id: "2017", name: "2017" },
      { _id: "2018", name: "2018" },
      { _id: "2019", name: "2019" },
      { _id: "2020", name: "2020" },
    ];
  }

  getSortOptions() {
    return [
      { path: "dateMade", label: "date", order: "asc" },
      { path: "name", label: "name", order: "asc" },
    ];
  }

  // handleAdd = async () => {
  //   const obj = { title: "a", body: "b" };
  //   //returns response object that you can destructure, data here has what we want right now.
  //   const { data: post } = await axios.post("endpoint", obj);
  //   const posts = [post, ...this.state.sculptures];
  //   this.setState({ sculptures: posts });
  // };

  async getSculptures() {
    const { data } = await axios.get(
      "https://desolate-savannah-11467.herokuapp.com/api/sculptures/"
    );
    data.map((sculpture) => {
      sculpture.dateMade = sculpture.dateMade.substring(
        0,
        sculpture.dateMade.indexOf("T")
      );
      return sculpture;
    });
    console.log(data);
    return data;
  }

  handleSearchSubmit = (searchphrase) => {
    //Call server to submit login
    //redirect to logged in page
    this.setState({ searchPhrase: searchphrase });
    console.log(searchphrase, "Submitted");
  };

  getPagedData = () => {
    const {
      selectedYear,
      sculptures: allSculptures,
      selectedSortOption,
      currentPage,
      pageSize,
      searchPhrase,
    } = this.state;
    const fromYear =
      selectedYear && selectedYear._id
        ? allSculptures.filter(
            (sculpture) =>
              sculpture.dateMade.substring(0, 4) === selectedYear.name
          )
        : allSculptures;

    const searchResults =
      searchPhrase === ""
        ? fromYear
        : fromYear.filter((sculpture) => {
            const re = new RegExp(searchPhrase.toLowerCase());
            return re.test(sculpture.name.toLowerCase());
          });

    const sorted = _.orderBy(
      searchResults,
      [selectedSortOption.path],
      [selectedSortOption.order]
    );
    const count = sorted.length;
    const sculptures = paginate(sorted, currentPage, pageSize);

    return { totalcount: count, sculptures };
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedSortOption,
      sortOptions,
      selectedYear,
      years,
    } = this.state;

    const { totalcount, sculptures } = this.getPagedData();

    return (
      <div>
        <Header>Sculptures</Header>
        <div className="container-fluid">
          <div className="row my-row">
            <div className="container-fluid">
              <div className="row">
                <SearchForm onSearchSubmit={this.handleSearchSubmit} />
              </div>
              <div className="row">
                <p className="mt-2">Select:</p>
                <div className="col-4">
                  <Dropdown
                    items={years}
                    currentItem={selectedYear}
                    onItemSelect={this.handleYearSelect}
                  ></Dropdown>
                </div>
                <p className="mt-2">Sort By:</p>
                <div className="col-sm-6">
                  <SortBy
                    onSort={this.handleSort}
                    sortOptions={sortOptions}
                    selectedSortOption={selectedSortOption}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* This displays until data is loaded */}
          {sculptures.length === 0 ? (
            <h1 className="text-center">Loading</h1>
          ) : (
            <div className="row my-row">
              <ul className="container">
                <GridGenerator cols={3}>
                  {sculptures.map((sculpture) => {
                    return (
                      <ThumbnailCard
                        key={sculpture._id}
                        name={sculpture.name}
                        date={sculpture.dateMade}
                        photoURL={sculpture.photoURL}
                        description={sculpture.description}
                      />
                    );
                  })}
                </GridGenerator>
              </ul>
            </div>
          )}
          <div className="row justify-content-center">
            <Paginator
              itemsCount={totalcount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sculptures;
