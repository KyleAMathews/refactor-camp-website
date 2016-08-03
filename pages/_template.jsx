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
            to={prefixLink('/')}
          >
            <img
              alt="refactor camp logo"
              src="https://kyleamathews.github.io/refactor-camp-website/refactorCampHeader.png"
              height={93}
            />
          </Link>
          <h5>
            <Link
              to={prefixLink('/')}
            >
              Home
            </Link>
            {' '}|{' '}
            <Link
              to={prefixLink('/refactorcamp2016/')}
            >
              Refactor Camp 2016
            </Link>
            {' '}|{' '}
            <Link
              to={prefixLink('/previous-years/')}
            >
              Previous Years
            </Link>
            {' '}|{' '}
            <Link
              to={prefixLink('/meetups/')}
            >
              Meetups
            </Link>
          </h5>
          <hr />
          {this.props.children}
          <hr />
          <footer><div id="footer">Copyright &copy; <a href="http://ribbonfarm.com">Ribbonfarm, Inc. </a>2016</div></footer>
        </Container>
      </div>
    )
  },
})
