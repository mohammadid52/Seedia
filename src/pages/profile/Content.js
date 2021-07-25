import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Container, Row, Col } from 'shards-react'
import UserDetails from 'pages/profile/UserDetails'
import UserAccountDetails from 'pages/profile/UserAccountDetails'

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
})

function Content(props) {
  return (
    <Container fluid className="main-content-container px-4">
      <Row>
        <Col lg="4">
          <UserDetails />
        </Col>
        <Col lg="8">
          <UserAccountDetails />
        </Col>
      </Row>
    </Container>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content)
