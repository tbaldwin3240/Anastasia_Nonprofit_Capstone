import React from 'react'

function YOUR_FRONT_CCOMPONENT()  {
    return (
        <div style={{
        backgroundImage: `url("https://via.placeholder.com/500")` 
        }}>
          Hello World
        </div>
      );
    }

    // const CardStyle = {
    //     border: "1px solid black",
    //     padding: "20px",
    //     margin: "20px",
    //     width: "200px",
    //     height: "300px"
    //   };

    //   const Card = ({ FrontCard }) => {
    //     const [isFlipped, setIsFlipped] = React.useState(false);
    //     // console.log(project);
    //     return (
    //       <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    //         <div
    //           style={CardStyle}
    //           onMouseEnter={() => setIsFlipped((prev) => !prev)}
    //           className="CardFront"
    //         >
    //           <div>
    //             This is the fron of the card
    //             <h3>{FrontCard.title}</h3>
    //             <img width="200" src={project.gif} alt="" />
    //             <ul>
    //               <li>{FrontCard.html}</li>
    //               <li>{FrontCard.css}</li>
    //               <li>{FrontCard.javascript}</li>
    //               <li>{FrontCard.react}</li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div
    //           style={CardStyle}
    //           onMouseLeave={() => setIsFlipped((prev) => !prev)}
    //           className="CardBack"
    //         >
    //           This is the back of the card.
    //         </div>
    //       </ReactCardFlip>
    //     );
    //   };
      
    //   const Projects = () => {
    //     return (
    //       <div style={{ margin: "auto", width: "50%" }} className="Projects">
    //         {Data.map((item, index) => (
    //           <Card project={item} key={`card-${index}`} />
    //         ))}
    //       </div>
    //     );
    //   };

export default YOUR_FRONT_CCOMPONENT