import { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import { data } from "../data";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.state = { filter: "All" };

    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFilter(filter) {
    this.setState({ filter });
  }

  projectsList() {
    return this.state.filter === 'All' ? data : data.filter(d => d.category === this.state.filter);
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.filter}
          onSelectFilter={(filter) => this.onSelectFilter(filter)}
        />

        <ProjectList projects={this.projectsList()} />
      </div>
    );
  }
}
