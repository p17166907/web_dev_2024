import { Logo } from "./Logo-component"

export function NavBar({ children }) { return (<nav className="nav-bar"> <Logo /> {children}</nav>) }
