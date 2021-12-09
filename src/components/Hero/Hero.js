import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My Name is <br />
        <strong>Cristian Farias</strong>
      </SectionTitle>
      <SectionText>
      What am I offering...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida nunc ac neque ultrices finibus. Donec varius mauris in quam rhoncus rutrum. Ut odio eros, aliquet sed tempor vehicula, pretium fringilla elit.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;