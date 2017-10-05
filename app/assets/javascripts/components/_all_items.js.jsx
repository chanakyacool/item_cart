var AllItems = React.createClass({

  componentWillMount(){
    console.log("component all items will mount");
  },

  getInitialState(){
    return { items: [] };
  },

  // render() {
  //   return(
  //     <div>
  //       <h1>All items</h1>
  //     </div>
  //   );
  // },

  render() {
    var items = this.state.items.map((item) => {
      return(
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    });
    return(
      <div>
        {items}
      </div>
    )
  },

  componentDidMount(){
    console.log("component is mounted");
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  }    
});