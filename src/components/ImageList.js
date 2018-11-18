import React from 'react';

const ImageList = (props) => {
    console.log(props.images);
    const image = props.images.map(({description,id,urls})=>{
        return <img alt={description} key={id} src={urls.regular} />
    });
    return <div>{image}</div>
}

export default ImageList;