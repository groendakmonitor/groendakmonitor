import { PropsWithChildren } from "react"

interface Props {
  className?: string;
}

const WidgetHeader = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={`widget-header ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default WidgetHeader
