import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  max-width: 500px;
`;

const ErrorButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #2563eb;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    
    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>⚠️ Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            {this.props.fallbackMessage || 
              'We encountered an error while loading this content. Please try refreshing the page.'}
          </ErrorMessage>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ marginBottom: '1rem', textAlign: 'left', maxWidth: '600px' }}>
              <summary style={{ cursor: 'pointer', color: '#6b7280' }}>
                Error details
              </summary>
              <pre style={{ 
                marginTop: '0.5rem', 
                padding: '1rem', 
                background: '#f3f4f6', 
                borderRadius: '0.5rem',
                overflow: 'auto',
                fontSize: '0.875rem',
                color: '#dc2626'
              }}>
                {this.state.error.toString()}
              </pre>
            </details>
          )}
          <ErrorButton onClick={this.handleReset}>
            Try Again
          </ErrorButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
