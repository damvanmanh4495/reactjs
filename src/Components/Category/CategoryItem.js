import React, {Component} from 'react';
import './CategoryItem.css'

class CategoryItem extends Component {
    render() {
        const {item, onClick} = this.props
        return (
            <div onClick={onClick} className="category_item">
                <h5>{item.name}</h5>
            </div>
        );
    }
}



export default CategoryItem;
