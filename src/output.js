import React, { Component } from 'react';

class Output extends Component {
    render() { 
        let {output} = this.props;
        return (
            <div id="output">
                <p id="output-value">{output}</p>
              </div>
          );
    }
}
 
export default Output;