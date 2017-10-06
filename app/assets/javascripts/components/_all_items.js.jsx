var AllItems = React.createClass({

  handleDelete(id){
    this.props.handleDelete(id);
  },

  onUpdate(item){
    this.props.onUpdate(item);
  },

  onSearch() {
    this.props.onSearch(this.refs.searchInput.value)
  },

  render() {
    var itemListing = {
      'padding-top': 10
    }

    var items = this.props.items.map((item) => {
      return(
        <div key={item.id}>
         <Item item={item} handleDelete={this.handleDelete.bind(this, item.id)} handleEdit={this.handleEdit} handleUpdate={this.onUpdate} />
        </div>
      )
    });
    return(
      <div>
        <div style={itemListing}>
          <input className="searchbar-edit" type="text" ref="searchInput" placeholder="Search By Name or Description" />
          <button onClick={this.onSearch}>Search</button>
        </div>
        {items}
      </div>
    )
  }
});