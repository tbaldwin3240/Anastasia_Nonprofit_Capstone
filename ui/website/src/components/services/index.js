import React from 'react'

const Services = () => {
  return (
  
     <ServicesContainer>
         <ServicesH1>Our Services</ServicesH1>
         <ServicesWrapper>
             <ServvicesCard>
                 <Services Icon src={icon1}/>
                 <ServicesH2>Reduce expenses</ServicesH2>
                 <ServicesP>WeTO REUDE FEE AND INCREASE YOUR OVERALL REVENUE</ServicesP>
             </ServvicesCard>
             <ServvicesCard>
                 <Services Icon src={icon2}/>
                 <ServicesH2>Reduce expenses</ServicesH2>
                 <ServicesP>VIRTUAL OFFICES</ServicesP>
             </ServvicesCard>
             <ServvicesCard>
                 <Services Icon src={icon3}/>
                 <ServicesH2>Reduce expenses</ServicesH2>
                 <ServicesP>We TO REUDE FEE AND INCREASE YOUR OVERALL REVENUE</ServicesP>
             </ServvicesCard>
             <ServvicesCard>
                 <Services Icon src={icon4}/>
                 <ServicesH2>Reduce expenses</ServicesH2>
                 <ServicesP>WeTO REUDE FEE AND INCREASE YOUR OVERALL REVENUE</ServicesP>
             </ServvicesCard>
         </ServicesWrapper>
     </ServicesContainer>
  )
}

export default Services