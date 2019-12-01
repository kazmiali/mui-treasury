import React from 'react';
import Helmet from 'react-helmet';
import { Location } from '@reach/router';
import { Root, muiTreasuryPreset } from '@mui-treasury/layout';
import NoSsr from '@material-ui/core/NoSsr';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faFighterJet,
//   faDiceD8,
//   faSparkles,
//   faCubes,
//   faCity,
//   faThumbsUp,
// } from '@fortawesome/pro-duotone-svg-icons';
// import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
// import {
//   faTwitter,
//   faGithub,
//   faFacebookF,
// } from '@fortawesome/free-brands-svg-icons';
import { ThemeWrapper } from './utils/theme';
import './global.css';
import banner from './assets/mui-treasury_banner_minified.jpg';

// library.add(
//   faFighterJet,
//   faDiceD8,
//   faSparkles,
//   faCubes,
//   faCity,
//   faThumbsUp,
//   faEnvelope,
//   faTwitter,
//   faGithub,
//   faFacebookF
// );

const App = ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Mui Treasury</title>
      <meta
        name="title"
        content="Mui Treasury — Predefined Material UI Components"
      />
      <meta
        name="description"
        content="The mission is to boost any projects that want to shake the world, so that our future is better than today. This is an open-source project that provides a collection of ready-to-use components based on Material-UI."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mui-treasury.com" />
      <meta
        property="og:title"
        content="Mui Treasury — Predefined Material UI Components"
      />
      <meta
        property="og:description"
        content="The mission is to boost any projects that want to shake the world, so that our future is better than today. This is an open-source project that provides a collection of ready-to-use components based on Material-UI."
      />
      <meta property="og:image" content={banner} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mui-treasury.com/" />
      <meta
        property="twitter:title"
        content="Mui Treasury — Predefined Material UI Components"
      />
      <meta
        property="twitter:description"
        content="The mission is to boost any projects that want to shake the world, so that our future is better than today. This is an open-source project that provides a collection of ready-to-use components based on Material-UI."
      />
      <meta property="twitter:image" content={banner} />
    </Helmet>
    <Location>
      {({ location }) => {
        if (location.pathname === '/layout/develop') {
          return children;
        }
        return (
          <NoSsr>
            <ThemeWrapper>
              <Root omitThemeProvider config={muiTreasuryPreset}>
                {children}
              </Root>
            </ThemeWrapper>
          </NoSsr>
        );
      }}
    </Location>
  </>
);

export default App;