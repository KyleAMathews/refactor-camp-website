import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: rhythm(2),
          }}
        >
          <Link
            to={prefixLink("/")}
          >
            <img src="refactorCampHeader.png" />
          </Link>
          <h5>
            <Link
              to={prefixLink("/")}
            >
              Home
            </Link>
            {' '}|{' '}
            <Link
              to={prefixLink("/refactorcamp2014/")}
            >
              Refactor Camp 2014
            </Link>
            {' '}|{' '}
            <Link
              to={prefixLink("/refactorcamp2013/")}
            >
              Refactor Camp 2013
            </Link>
            {' '}|{' '}
            <Link
              to={prefixLink("/refactorcamp2012/")}
            >
              Refactor Camp 2012
            </Link>
            {' '}|{' '}
            <Link
              to={prefixLink("/meetups/")}
            >
              Meetups
            </Link>
          </h5>
          <hr />
          {this.props.children}
          <footer><div id="footer">Copyright &copy; <a href="http://ribbonfarm.com">Ribbonfarm, Inc. </a>2016</div></footer>
        </Container>
      </div>
    )
  },
})
