import { FC, ReactNode } from "react";
import './branch.scss'

interface IProps {
    children: ReactNode
    title?: string
}
export const Branch: FC<IProps> = ({ title, children }) => {
    return (
        <div className="branch">
            {title && <p className="branch__title">{title}</p>}
            <div className="parent-branch">{children}</div>
        </div>
    )
};