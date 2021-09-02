import { ReactElement } from "react-transition-group/node_modules/@types/react";

export function GetMainComponent(
    main_style: string,
    wrapper_style: string,
    children: ReactElement | ReactElement[]
): ReactElement {
    return GetParentChildComponent(main_style, wrapper_style, children);
}

export function GetParentChildComponent(
    main_style: string,
    wrapper_style: string,
    children: ReactElement | ReactElement[]
): ReactElement {
    return (
        <div className={main_style}>
            <div className={wrapper_style}>{children}</div>
        </div>
    );
}

export function GetSiblingsComponent(main_style: string[], children: ReactElement[]): ReactElement[] {
    return main_style.map((cn, cni) => (
        <div key={cni} className={cn}>
            {children[cni]}
        </div>
    ));
}
