import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="notification-cart">
    <h1 className="heading">Alert Notifications</h1>
    <ul className="notification-container">
      <Notification>
        <div className="item">
          <AiFillCheckCircle className="success-logo" />
          <div className="data-cross">
            <div className="pattern">
              <h1 className="success-heading">Success</h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </div>
      </Notification>

      <Notification>
        <div className="item">
          <RiErrorWarningFill className="error-logo" />
          <div className="data-cross">
            <div className="pattern">
              <h1 className="error-heading">Error</h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </div>
      </Notification>

      <Notification>
        <div className="item">
          <MdWarning className="warning-logo" />
          <div className="data-cross">
            <div className="pattern">
              <h1 className="warning-heading">Warning</h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </div>
      </Notification>

      <Notification>
        <div className="item">
          <MdInfo className="info-logo" />
          <div className="data-cross">
            <div className="pattern">
              <h1 className="info-heading">Info</h1>
              <p className="description">
                Anyone on the internet can view these files
              </p>
            </div>
          </div>
        </div>
      </Notification>
    </ul>
  </div>
)

export default AlertNotifications
