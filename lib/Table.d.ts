import * as React from "react";
interface TableProps {
    data?: any[];
    zebra?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
    children: any;
}
export declare class Table extends React.PureComponent<TableProps> {
    render(): JSX.Element;
}
export {};
