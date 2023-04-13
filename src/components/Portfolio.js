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
    const projectsFiltered = data.filter(d => d.category === this.state.filter);
    return projectsFiltered.length === 0 ? data : projectsFiltered;
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
