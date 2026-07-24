// @ts-nocheck
import React, { Component, ErrorInfo, ReactNode } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-white m-4 flex flex-col items-center justify-center min-h-[200px]">
          <h2 className="text-xl font-bold mb-2">Algo correu mal.</h2>
          <p className="text-gray-300 text-sm">Ocorreu um erro ao carregar esta secção.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
