import * as React from "react";
import { TableRowProps } from "./TableRow";
interface TableHeaderProps extends TableRowProps {
    children?: any;
}
export declare class TableHeader extends React.PureComponent<TableHeaderProps> {
    render(): JSX.Element;
}
export {};
