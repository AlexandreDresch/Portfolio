interface NotificationProps {
    className: string;
    title: string;
    children: React.ReactNode;
}

export default function Notification({className, title, children} : NotificationProps) {
  return (
    <div className={`${className || ""} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
        <div className="flex-1">
            <h6 className="mb-1 font-semibold text-base">{title}</h6>
            {children}
        </div>
    </div>
  )
}
