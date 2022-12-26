import { styled } from "@mui/system";

export const Flex = styled("div")(
    ({
        direction,
        wrap,
        justifyContent,
        alignItems,
        alignContent,
        order,
        grow,
        shrink,
        basis,
        alignSelf,
        height,
        width,
        margin,
        padding,
        position,
        border,
        borderRight,
        borderLeft,
        borderTop,
        borderBottom,
        gap,
        borderRadius,
        cursor
    }) => ({
        display: "flex",
        flexDirection: direction || "",
        flexWrap: wrap || "",
        justifyContent: justifyContent || "",
        alignItems: alignItems || "",
        alignContent: alignContent || "",
        order: order || "",
        flexGrow: grow || "",
        flexShrink: shrink || "",
        flexBasis: basis || "",
        alignSelf: alignSelf || "",
        height: height || "",
        width: width || "",
        margin: margin || "",
        padding: padding || "",
        position: position || "",
        border: border || "",
        borderRight: borderRight || "",
        borderLeft: borderLeft || "",
        borderTop: borderTop || "",
        borderBottom: borderBottom || "",
        gap: gap || "",
        borderRadius: borderRadius || "",
        cursor: cursor || "",
    })
);

export const FlexContainer = styled(Flex)(({ backgroundColor, position }) => ({
    position: position || "static",
    backgroundColor: backgroundColor || "transparent",
}));
