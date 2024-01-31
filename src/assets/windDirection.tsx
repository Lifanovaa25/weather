import React from "react";

interface Props {
  deg: number;
}

export const windDirection = ({ deg }: Props) => {
  if (deg >= 0 && deg <= 22.5) {
    return 'северный'
  } else  if (deg >45 && deg <= 67.5) {
    return 'северо-восточный'
  }else  if (deg >67.5 && deg <= 90) {
    return 'восточный'
  }
};
