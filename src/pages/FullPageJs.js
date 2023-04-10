import React from 'react'
import fullpage from 'fullpage.js'

function FullPageJsSample() {

      new fullpage('#fullpage', {
        licenseKey: 'ETULK-NL357-IBJ76-XHLAI-DVWCK'
      });
    
    return (
        <div id="fullpage">
            <div class="section">Some section</div>
            <div class="section">Some section</div>
            <div class="section">Some section</div>
            <div class="section">Some section</div>
        </div>
    )
}

export default FullPageJsSample