var NewItem = React.createClass({

  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;

    console.log('The name value is ' + name + 'the description value is ' + description);
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (response) => {
        console.log('itworked', response);
        this.props.handleSubmit(response);
      },
      error: (error) => {
        console.log('failed', error.responseText);
      }
    })
  },

  render(){
    return(
      <div>
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});