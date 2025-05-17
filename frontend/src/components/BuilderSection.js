import React from 'react';
import { BuilderComponent } from '@builder.io/react';
import { BUILDER_MODELS } from '../builder-config';

const BuilderSection = ({ name }) => {
  return (
    <BuilderComponent 
      model={BUILDER_MODELS.SECTION} 
      options={{ query: { name } }} 
      className="builder-section"
    />
  );
};

export default BuilderSection;