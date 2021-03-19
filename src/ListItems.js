import React from 'react'
import './ListItems.css'

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'

import FlipMove from 'react-flip-move'

function ListItems(props) {
	// Thanks to https://stackoverflow.com/a/48005146
	fontawesome.library.add(faTrash);

	const items = props.items;
	// console.log(items);
	// console.log(props);
		
	const listItems = items.map(item => {
		return <div className="list" key={item.key}>
			<p>
				<input
					id={item.key}
					value={item.text}
					onChange={
						(e)=> {
							props.setUpdate(e.target.value, item.key);
						}
					}
				/>
				<span>
					{/* https://fontawesome.com/v4.7.0/icon/trash */}
					<FontAwesomeIcon
						className="faicons"
						icon="trash"
						onClick={() => {
							props.deleteItem(item.key)
						}}
					/>
				</span>
			</p>
		</div>
	})

	// { /* <h1>From ListItems.js</h1> */ }
	return (
		<div>
			<FlipMove duration={500} easing="ease-in-out">
				{listItems}
			</FlipMove>
		</div>
	)
}
export default ListItems;
