import { PropsWithChildren } from 'react'
import { ReactComponent as Spinner } from './styles/images/loading.svg';
import './styles/widget.scss'

interface Props {
  loading?: boolean;
  className?: string;
}

const Widget = ({ children, loading, className }: PropsWithChildren<Props>) => {
  return (
    <div className={`widget ${className ?? ''}`}>
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
