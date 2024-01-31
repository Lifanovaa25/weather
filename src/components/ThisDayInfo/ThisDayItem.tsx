import React from 'react';
import { IndicatorSvgSelector } from '../../assets/icons/indicators/IndicatorSvgSelector';
import { Item } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss';

interface Props {
  // item: Item;
  icon_id:string;
  iname:string;
  value :string
}

export const ThisDayItem = ({ icon_id,iname,value }: Props) => {
  // const { icon_id, name, value , temp,feels_like,deg,speed} = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator__name}>{iname}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
};
