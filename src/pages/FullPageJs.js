import React, {useEffect} from 'react'
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client

class MySection extends React.Component {
    render() {
      return (
        <div className="section">
          <h3>{this.props.content}</h3>
        </div>
      );
    }
}

function FullPageJsSample() {

    const anchors = ["firstPage", "secondPage", "thirdPage"];

    return (

        <ReactFullpage
        licenseKey = {'ETULK-NL357-IBJ76-XHLAI-DVWCK'}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <ReactFullpage.Wrapper>
          <MySection content={"Slide down!"} />
          <MySection content={"Keep going!"} />
          <MySection content={"Slide up!"} />
        </ReactFullpage.Wrapper>
      );
    }}
  />

    )
}

export default FullPageJsSample