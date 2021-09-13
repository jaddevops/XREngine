import AdminConsole from '@xrengine/client-core/src/admin/components/Location'
import { AuthService } from '@xrengine/client-core/src/user/reducers/auth/service'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

interface Props {}

function locations(props: Props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AuthService.doLoginAuto(true))
  }, [])

  return <AdminConsole />
}

export default locations
