import React, { Component } from 'react';

import { MainError } from '../components/UI/MainError';

export class ErrorCatcher extends Component {
  state = { error: null }

  static getDerivedStateFromError = error => ({ error })

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    const { error } = this.state;
    const { fallback, children } = this.props;

    if (error) return fallback ? fallback(this.state.error) : <MainError />;
    return children;
  }
}
