import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-4.svg';


import { ServicesContainer,
          ServicesH1, 
          ServicesWrapper,
           ServicesCard, 
           ServicesIcon,
           ServicesH2,
           ServicesP
        
        } from './ServicesElements'

const Services = () => {
    return (
       <ServicesContainer id='services'>
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                 <ServicesIcon src={Icon1} />
                 <ServicesH2>Reduce expenses</ServicesH2>
                 <ServicesP>We help reduce your fess increse your overall revenew.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                 <ServicesIcon src={Icon2} />
                 <ServicesH2>Virtual Offices</ServicesH2>
                 <ServicesP>You can access our platform online anywhere in the world</ServicesP>
              </ServicesCard>
              <ServicesCard>
                 <ServicesIcon src={Icon3} />
                 <ServicesH2>Premium Benifits</ServicesH2>
                 <ServicesP>Unlock your special membership card that retyrns 5% cash back.</ServicesP>
              </ServicesCard>
          </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Services
