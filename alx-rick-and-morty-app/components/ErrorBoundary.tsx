import React, { ReactNode } from 'react';

interface State {
    hasError: boolean;
  }
  
  interface ErrorBoundaryProps {
    children: ReactNode;
  }
  
  
  class ErrorBoundary extends React.Component<ErrorBoundaryProps , State> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
  static getDerivedStateFromError(error: Error): State {
    console.log('🔴 ErrorBoundary: Error caught!', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('🔴 ErrorBoundary: componentDidCatch called', { error, errorInfo });
  }
  
    render() {
      if (this.state.hasError) {
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#fee',
            padding: '20px',
            textAlign: 'center'
          }}>
            <h1 style={{ color: '#c00', fontSize: '3em' }}>🔴 ERROR BOUNDARY ACTIVATED! 🔴</h1>
            <h2>Oops, there is an error!</h2>
            <p>The Error Boundary successfully caught the error!</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              style={{
                padding: '15px 30px',
                fontSize: '18px',
                backgroundColor: '#c00',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px'
              }}
            >
              Try again?
            </button>
          </div>
        );
      }

      return this.props.children;
    }
  }
  
  export default ErrorBoundary;