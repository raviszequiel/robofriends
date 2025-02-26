import React from 'react'; //so the jsx is understandable

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 ma2 grow bw2 shadaw-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
};

export default Card;
