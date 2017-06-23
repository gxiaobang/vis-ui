/**
 * 按钮
 */

import React from 'react';

class Page extends React.Component {

  render() {
    return (
      <img src={require('url-loader!@/images/404.svg')} alt="404" style={{ maxHeight: 800 }} />
    )
  }
}

export default Page;