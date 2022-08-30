import React, { Component } from 'react'
import { ShopData } from './shop-data.component'

export class ShopPage extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         collections : ShopData
      }
    }
  render() {
    return (
      <div>ShopPage</div>
    )
  }
}

export default ShopPage