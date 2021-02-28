import { PropsWithChildren } from 'react'
import { ReactComponent as Spinner } from 'assets/images/loading.svg';
import './widget.scss'

interface Props {
  loading?: boolean
}

const Widget = ({ children, loading }: PropsWithChildren<Props>) => {
  return (
    <div className="widget">
      {children}
      {loading && (
        <div className="widget-loading">
          <Spinner className="spinner"/>
        </div>
      )}
    </div>
  )
}

export default Widget
