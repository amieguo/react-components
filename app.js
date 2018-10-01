// TODO
// var App = () => (
//     <div>Some cliche salutation</div>
//   );

//   ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));
// import React from 'react';

var groceryItems = ['chocolate', 'icecream'];
// var GroceryList = (props) => (
//     <div>
//     <h2>My Grocery List</h2>
//     <ul>
//         <GroceryListItem item={props.items[0]}/>
//         <GroceryListItem item={props.items[1]}/>
//     </ul>
//     </div>
// );

// var GroceryListItem = (props) => ( 

//     <li>
//         {props.item}
//     </li>
// );

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done:false
        };
    }
    onListItemHover() {
        // console.log(this.setState);
        this.setState({
            done:!this.state.done
        });
    }
    render() {
        var style = {
            fontWeight: this.state.done ? 'bold' : 'none'
        };
        return (
            <li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.item}</li>
        );
    }
}
var GroceryList = (props) => (
    <div>
        <h2>My Grocery List</h2>
   <ul>
        {props.items.map(item => <GroceryListItem item={item} />)}
    </ul>
    </div>
);




ReactDOM.render(<GroceryList items={groceryItems} />, document.getElementById("app"));

