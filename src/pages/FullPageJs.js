import React from 'react'
import fullpage from 'fullpage.js'

function FullPageJsSample() {
    new fullpage('#fullpage', {
        licenseKey: 'ETULK-NL357-IBJ76-XHLAI-DVWCK',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
      });
  
    
    return (
        <div id="fullpage">
      <div class="section active" id="section0"><h1>fullPage.js</h1></div>
      <div class="section" id="section1">
          <div class="slide "><h1>Simple Demo</h1></div>
          <div class="slide active"><h1>Only text</h1></div>
          <div class="slide"><h1>And text</h1></div>
          <div class="slide"><h1>And more text</h1></div>
      </div>
      <div class="section" id="section2"><h1>No wraps, no extra markup</h1></div>
      <div class="section" id="section3"><h1>Just the simplest demo ever</h1></div>
    </div>
    )
}

export default FullPageJsSample