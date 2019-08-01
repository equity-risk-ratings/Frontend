/* import _ from 'lodash';
import React from 'react';
import axios from 'axios';
import { Search, Grid, Segment, Header } from 'semantic-ui-react';

const initialState = {
  isLoading: false,
  results: [],
  value: '',
  options: [],
};

export default class Test extends React.Component {
  state = initialState;

  componentDidUpdate() {
    axios
      .get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.value}&apikey=LKWC7HB4USLTPXIL`,
      )
      .then(res => {
        this.setState({ options: res.data['bestMatches'] });
      })
      .catch(err => {
        console.log('ERROR', err);
      });
  }

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.options, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state.options, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
 */
