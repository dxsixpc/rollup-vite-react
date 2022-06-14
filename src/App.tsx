import React from 'react';
import { Wrapper } from './Styled';
import TextWidget from './title';

const App: React.FC<any> = () => {
  return (
    <Wrapper className="App">
      <TextWidget title="1234" />
    </Wrapper>
  );
};

export default App;
