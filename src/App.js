import * as React from 'react';
import Example from './Example';

import { EditorProvider } from '@dooub/editor';

const App = () => {
  return (
    <EditorProvider>
        <Example />
    </EditorProvider>
  );
};

export default App;
