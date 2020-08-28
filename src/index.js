import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import Header from './componenets/header/header';
import Container from './componenets/container/container';
import Footer from './componenets/footer/footer';



const App = () => {
    return (
        <div className="bg" >
             <Header />
             <Container />
             <Footer />
        </div>
    );
};

ReactDom.render(<App />,
    document.getElementById('root'));