import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-item">
      {children}
      <GrFormClose />
    </div>
  )
}

export default Notification
