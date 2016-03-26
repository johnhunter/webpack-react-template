import React from 'react';
import ReactDOM from 'react-dom';
import '../app.scss';

const Main = React.createClass({
    render: () => {
        return (
            <div>
                Hello World!
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));
