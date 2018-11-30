import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Hi = ({firstName, lastName}) => {
    return <div>Hello <strong>{firstName} {lastName}</strong>
        <h1>h1 example</h1>
        <ul className="list">
            <li>list 1</li>
            <li>list 2</li>
            <li>list 3</li>
        </ul>
        {5 + 10}
    </div>
}

const MediaCard = ({title, body, imageUrl}) => {
    return <div>
                <h2> {title} </h2>
                <p> {body} </p>
                <img src={imageUrl} alt="" />
           </div>
}

const Gate = ({ isOpen }) => {
    return <div>
                <p> { isOpen ? "Open" : "Closed"} </p>
           </div>
}


ReactDOM.render(<Hi firstName="Waqar" lastName="Mohammad"/>, document.querySelector('#root'));
ReactDOM.render(<MediaCard title="title" body="body example text" imageUrl="https://via.placeholder.com/300x150"/>, document.querySelector('#root'));
ReactDOM.render(<Gate isOpen={false}/>, document.querySelector('#root'));