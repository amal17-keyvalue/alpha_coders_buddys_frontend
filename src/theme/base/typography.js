import colors from "./colors";

const { primary } = colors;

const baseProperties = {
  fontFamily: "Mona Sans, sans-serif",
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightIntermediate: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 900,
  fontSizeXXS: "0.65rem",
  fontSizeXS: "0.75rem",
  fontSizeSM: "0.875rem",
  fontSizeMD: "0.925rem",
  fontSizeLG: "1rem",
  fontSizeXL: "1.25rem",
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: primary.main,
  fontWeight: baseProperties.fontWeightBold,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightIntermediate: baseProperties.fontWeightIntermediate,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontSize: "2rem",
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h2: {
    fontSize: "1.875rem",
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h3: {
    fontSize: "1.5rem",
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h4: {
    fontSize: "1.25rem",
    lineHeight: 1.375,
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightMedium,
  },

  h5: {
    fontSize: "1rem",
    lineHeight: 1.625,
    ...baseHeadingProperties,
    fontWeight: baseProperties.fontWeightMedium,
  },

  h6: {
    fontSize: "0.75rem",
    lineHeight: 1.25,
    ...baseHeadingProperties,
  },

  xs: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: 1.25,
  },
  xxs: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXXS,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.25,
  },
  sm: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.5,
  },
  lg: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeLG,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.5,
  },
  xl: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightExtraBold,
    lineHeight: 0.05,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
