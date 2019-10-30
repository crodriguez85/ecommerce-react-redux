import React, { Component } from 'react';
import SHOP_DATA from './shop-data';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

class ShopPage extends Component {
    state = { 
        collections: SHOP_DATA
     }
    render() { 
        const {collections} = this.state;
        return ( 
            <div className="shop-page">
                {
                    collections.map(({id, title, items}) => (
                        <PreviewCollection
                            key={id}
                            title={title}
                            items={items}
                        />
                    ))
                }
            </div>
         );
    }
}
 
export default ShopPage;