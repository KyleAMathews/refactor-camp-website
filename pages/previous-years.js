import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  render () {
    const previousYears = this.props.route.pages.filter(
      (page) => page.file.dir === 'previous-years'
    )
    const links = previousYears.map((page) => (
      <li>
        <Link
          to={prefixLink(page.path)}
        >
          {`Refactor Camp ${page.data.year} — ${page.data.title}`}
        </Link>
      </li>
    ))
    return (
      <div>
        <h1>Past camps</h1>
        <ul>{links}</ul>
      </div>
    )
  },
})

