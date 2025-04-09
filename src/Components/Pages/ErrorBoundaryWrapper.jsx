import React from 'react'
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className='p-4 m-4 border border-red-500 rounded bg-red-100 text-red-800'>
      <h2 className='text-lg font-bold mb-2'>
        Something Went Wrong:
      </h2>
      <pre className='text-sm'>
        {error.message}
      </pre>
      <button onClick={resetErrorBoundary}
        className='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
        Try Again
      </button>
    </div>
  )
}

const ErrorBoundaryWrapper = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallBack}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryWrapper