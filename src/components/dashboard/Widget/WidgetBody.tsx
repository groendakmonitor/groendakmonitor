import { PropsWithChildren } from "react"

interface Props {
  className?: string;
}

const WidgetBody = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={`widget-body p-3 ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default WidgetBody
