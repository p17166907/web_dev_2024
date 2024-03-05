/**
 * Generic button component.  @param {{ children: React.ReactNode, onClickProp: () => void }} props - The button props.
 */
export function Button({ children, onClickProp }) { return <button className="button" onClick={onClickProp}>{children}</button> }