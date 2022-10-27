import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div >
      <Carousel fade className='mt-4' style={{maxHeight: '400px', maxWidth: '900px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://cdn.fs.teachablecdn.com/DYHSyOQzClnbu7UQzlhQ'
          alt="First slide" style={{maxHeight: '400px'}}
        />
        <Carousel.Caption>
          <h3 className='heading'>Programming with Scratch</h3>
          <p className='para'>
          Scratch is a high-level block-based visual programming language and website aimed primarily at children as an educational tool for programming,
          </p>
          <Link to={`/courses`}><Button variant="success">Start Learning</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pandorafms.com/blog/wp-content/uploads/2018/05/what-is-an-algorithm-featured.png"
          alt="Second slide" style={{maxHeight: '400px'}}
        />
        <Carousel.Caption>
          <h3 className='heading'>Algorithmsl</h3>
          <p className='para'>
          An algorithm is a procedure used for solving a problem or performing a computation.
          </p>
          <Link to={`/courses`}><Button variant="success">Start Learning</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687167/retina_1708x683_cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png"
          alt="Third slide" style={{maxHeight: '400px'}}
        />
        <Carousel.Caption>
          <h3 className='heading'>Computer programming</h3>
          <p className='para'>
          Computer programming is the process of performing a particular computation usually by designing and building an executable computer program.
          </p>
          <Link to={`/courses`}><Button variant="success">Start Learning</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
