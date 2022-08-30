import React, { Component } from 'react'
import './directory.styles.css'
import  MenuItem  from '../menu-item/menu-item.component';


export class Directory extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        sections: [{
                title : "Men",
                imageUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
                size : "large",
                id : "1",
                linkUrl: "men"
            },
            {
                title: "Women",
                imageUrl: "https://images.unsplash.com/photo-1509461641751-ed8c60422376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                size: "large",
                id: 2,
                linkUrl: "women"
            },
            {
                title: "Clothing",
                imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                id: 3,
                linkUrl: "clothing"
            },
            {
                title: "Bags",
                imageUrl: "https://images.unsplash.com/photo-1591348278900-019a8a2a8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
                id: 4,
                linkUrl: "bags"
            },
            {
                title: "Jewellery",
                imageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=837&q=80",
                id: 5,
                linkUrl: "jewellery"
            },
            {
                title: "Glasses",
                imageUrl: "https://images.unsplash.com/photo-1608539733377-5557e02926b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                size: "large",
                id: 6,
                linkUrl: "glasses"
            },
            {
                title: "Tech Accessories",
                imageUrl: "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                size: "large",
                id: 7,
                linkUrl: "tech-accessories"
            }, 
            
        ]
    }
    }
  render() {
    const { sections } = this.state;
    // const { titles, id } = this.state.sections;
    return (
        <div className="directory-menu">
            {
                sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)
            }
        </div>
    )
  }
}

export default Directory;