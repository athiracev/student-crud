import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LandingPage() {
  return (
    <div>

<div className='w-100 d-flex justify-content-center align-items-center ' style={{ height: '80vh' }}>
                <div className="row p-5 shadow">
                    <div className="col d-flex flex-column justify-content-center">
                        <h1 style={{color:'#'}}>Welcome</h1>
                        <p>The University of Oxford is a collegiate research university in Oxford, England.
                             It is the oldest university in the English-speaking world, with evidence of teaching as early as 109614. 
                             The university has 38 unique colleges, producing influential leaders and Nobel laureates, and offering a rich history and diverse academic programs.
                             The university is located along the upper course of the River Thames, 50 miles north-northwest of London</p>
                        <div>
                            <Link to={'/login'} className='btn btn-dark '>Login</Link>

                        </div>
                    </div>

                    <div className="col shadow" >
                        <img  src="https://www.philanthropy.cam.ac.uk/sites/www.alumni.cam.ac.uk/files/styles/flexslider_full/public/images/articles/main/fitzwilliam_museum_interior.jpg?itok=9gMGf-MW" style={{ height: '400px' }} className='image fluid shadow' alt="" />
                    </div>
                </div>
            </div>

            <div className="d-flex mt-2 flex-row justify-content-evenly">
                <Card className='shadow' style={{ width: '30rem'}}>
                    <Card.Img style={{height:'250px',width:'100%'}} variant="top" src="https://th.bing.com/th/id/R.08a4cae6bcbb1b9ca85bf9780ec59f2d?rik=khA5RO4t%2bNljRA&riu=http%3a%2f%2fwww.visionsoftravel.org%2fwp-content%2fuploads%2f2018%2f02%2fCambridge-England-UK-9.jpg&ehk=U%2f%2fXgJV7O49TdsrQ%2f%2bb13b3DlC7rq0ud%2fCfSo2U3Wt4%3d&risl=&pid=ImgRaw&r=0" />
                    <Card.Body>
                        <Card.Title>Campus</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Maxime laudantium delectus earum fuga minus voluptas odio! Exercitationem ab aliquam id!
                        </Card.Text>
                        <Button>Explore More</Button>
                    </Card.Body>
                </Card>
                <Card className='shadow' style={{ width: '30rem' }}>
                    <Card.Img style={{height:'250px',width:'100%'}} variant="top" src="https://www.liquidesign.co.uk/wp-content/uploads/2016/10/london-coffee-festival-cm-8-1920x1080.jpg" />
                    <Card.Body>
                        <Card.Title>Tech Fest</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Hic corrupti expedita enim itaque delectus libero reiciendis eius vel porro perferendis?
                        </Card.Text>
                        <Button>Explore More</Button>
                    </Card.Body>
                </Card>

                <Card className='shadow' style={{ width: '30rem' }}>
                    <Card.Img variant="top" style={{height:'250px',width:'100%'}} src="https://th.bing.com/th/id/OIP.5Nv0PSrBGlx7ErrdGK_pWAHaE8?w=1024&h=683&rs=1&pid=ImgDetMain" />
                    <Card.Body>
                        <Card.Title>Cultural Fest</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repudiandae neque quisquam iste non provident minus ipsum eaque corporis enim veritatis.
                        </Card.Text>
                        <Button className=''>Explore More</Button>
                    </Card.Body>
                </Card>




            </div>

<br /> <br /> <br />
            
        <div className="  mt-5 d-flex justify-content-center align-items-center ">
          <div className="col " >
            <h1  className='p-4'>Why Us</h1>
            <p  style={{ textAlign: 'justify',width:'25rem',marginLeft:'33px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores totam, facere voluptates dignissimos
              tempora fugiat architecto, necessitatibus sint iste iure eum, harum corrupti. Quos vitae esse eius vel itaque?</p>
          </div>
          <div className="col ">

            <iframe width="700" height="400" src="https://www.youtube.com/embed/LlCwHnp3kL4?si=wNn_tWKHBBNdLfe8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
              clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
        </div>
      
    </div>
  )
}

export default LandingPage
