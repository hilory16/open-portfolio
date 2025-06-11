import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Navigations from './navigations';

const queryClient = new QueryClient();

export default function Main() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigations />
      </QueryClientProvider>
    </>
  );
}
