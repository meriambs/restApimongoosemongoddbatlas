import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {CSSTransition,TransitionGroup}from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems} from '../Action/itemActions';


const ShoppingList = (props) => {

const [items, setItems] = useState([
	{ name: 'item 1',id:uuidv4()},
	{ name: 'item 2',id:uuidv4()},
    { name: 'item 3',id:uuidv4()},
    //  isSelected: false },
]);
/**partie input  */
const [inputValue, setInputValue] = useState('');
const handleAddButtonClick = () => {
	const newItem = {
		name: inputValue,
    };
    const newItems = [...items, newItem];

	setItems(newItems);
	setInputValue('');
};
// partie remove item :
 function handleRemove(id) {
    const newList = items.filter((item) => item.id !== id);
 console.log(id);
    setItems(newList);
  }

 return (
   <div className='item-list'>
   <div className='add-item-box'>
   {/* ici on a mit function input  */}
	<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
	<button  onClick={() => handleAddButtonClick()} >ADD ME</button>
</div>
	{items.map((item, index) => (
		<div className='item-container'>
			<div className='item-name'>
				{items.isSelected ? (
					<>
						<button>check</button>
						<span className='completed'>{item.name}</span>
					</>
				) : (
					<>
						 <button type="button" onClick={() => handleRemove(item.index)}>
            Remove
          </button>
          
						<span key={item.id}>{item.name}</span>
					</>
				)}
			</div>
           </div>
	))}
</div>
  );

}
const mapStateToProps=(item)=>({
item:{item}
})
export default connect(mapStateToProps,{getItems})(ShoppingList);