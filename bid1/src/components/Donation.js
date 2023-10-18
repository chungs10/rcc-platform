import React from 'react';
import './Donation.css';

function Donation() {
  
    return (
      <div className='support-container'>
        {/* <video className="video-background" autoPlay loop muted>
          <source src="/videos/video-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className='support-content'>
            <div className='content-image'></div>
            <div className='content-paragraph'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aenean pharetra magna ac placerat. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Tempus quam pellentesque nec nam aliquam sem. Scelerisque purus semper eget duis at tellus at urna. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Nam aliquam sem et tortor consequat id porta nibh. Dolor purus non enim praesent elementum facilisis. Libero nunc consequat interdum varius sit amet. Vulputate odio ut enim blandit. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Eu tincidunt tortor aliquam nulla facilisi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Ullamcorper morbi tincidunt ornare massa eget egestas. Platea dictumst quisque sagittis purus sit amet volutpat. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed arcu non odio euismod lacinia at quis. Enim ut sem viverra aliquet eget. Risus ultricies tristique nulla aliquet enim tortor at.</p>
            </div>
        </div>
        <div className='support-form'>
          <form>
            <h1 className='support-form-header'>Donate Below</h1>

            <button className='supportPageButton' type='submit'>$5</button>
            <button className='supportPageButton' type='submit'>$10</button>
            <button className='supportPageButton' type='submit'>$15</button>
            <button className='supportPageButton' type='submit'>$20</button>

            <h2>Specific Value</h2>
            <input
              type='number'
              name='customValue'
              placeholder='Custom Donation'
            />

          </form>
        </div>
      </div>
    );
}

export default Donation;
