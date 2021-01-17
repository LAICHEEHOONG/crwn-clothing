import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';
import './collection-preview.component.scss'

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(({ id, ...otherObj }) => {
                            console.log({ ...otherObj });

                            return (

                                <CollectionItem key={id}  {...otherObj} />
                            )
                        })
                }
            </div>

        </div>
    );
}

export default CollectionPreview;
  //{/* <div key={obj.id} >{obj.name}</div> */}