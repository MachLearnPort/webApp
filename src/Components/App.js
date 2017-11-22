import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';


//App Component <div is actual React.createElement but using JSX so it gets
// This uses a state
class App extends React.Component {
  // Sets the state of the component
  constructor(props) {
    super(props);
    this.state = { 
      pageHeader: 'Naming Contest',
      contests: this.props.initialContests
    };
  }
  
  // integration with 3rd party apps and ajax calls are set inside these lifecycle hooks
  // put our timers and listeners in these
  componentDidMount() {
    // ajax request ...
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
        console.log(resp.data.contests);
      })
      .catch(console.error);
    
  }
  componentWillUnmount() {
    //clean timers, listners
  }
  
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.test}
        </div>
        {this.state.contests.map(contest =>
          <ContestPreview key = {contest.id} {...contest} />
        )}
      </div>

    );
  }
}

export default App;
