export interface AnimatingIcon {
  color: string;
}

export interface AnimatingCard {
  text: string;
}

export const isAnimatingIcon = (
  b: AnimatingIcon | AnimatingCard
): b is AnimatingIcon => {
  return (b as AnimatingIcon).color !== undefined;
};
