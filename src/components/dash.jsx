import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'semantic-ui-react';


class ThemingLayout extends Component {


    render() {

return(
       <>
    <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
    </div>
    </>
     )
}
}


export default ThemingLayout
