import app from '../../server/app'

describe('\'UserRelationship\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-relationship')

    expect(service).toBeTruthy()
  })
})
