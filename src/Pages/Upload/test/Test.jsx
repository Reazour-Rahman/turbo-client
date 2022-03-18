import * as React from 'react';

const dataItems = [{
    title: "title1",
    content: [{
        imageUrl: "http://placehold.it/300x300",
        title: "Campaigns",
        description: "Short description explaining the use of this design in a single sentence."
      },
      {
        imageUrl: "http://placehold.it/300x300",
        title: "Events",
        description: "Short description explaining the use of this design in a single sentence."
      },
      {
        imageUrl: "http://placehold.it/300x300",
        title: "General",
        description: "Short description explaining the use of this design in a single sentence."
      }
    ]
  },
  {
    title: "title2",
    content: [{
        imageUrl: "http://placehold.it/300x300",
        title: "Video Template A",
        description: "Short description explaining the use of this design in a single sentence."
      },
      {
        imageUrl: "http://placehold.it/300x300",
        title: "Video Template A",
        description: "Short description explaining the use of this design in a single sentence."
      }
    ]
  }
];

class Test extends React.Component {
  
  render() {
    return <div style={{marginLeft:"100px"}}> 
    {
      dataItems.map((item, index) => {
        return ( <div>
            <h1>{item.title}</h1>
            { item.content.map((c, i) => <div>
            <h3>This is title {console.log(c)}</h3>
            {/* <h3>{c.description}</h3> */}
            </div>)}
          </div>
        )
      })
    }
    </div>
  }
}
export default Test;