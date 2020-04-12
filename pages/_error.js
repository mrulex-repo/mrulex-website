import { Component } from 'react'

import { Router, withTranslation } from 'i18n'

class Error extends Component {
  componentDidMount() {
    Router.push("/index");
  }

  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    };
  }

  render() {
    return <div />;
  }
}

export default withTranslation('common')(Error);
