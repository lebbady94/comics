import React from 'react';
import { Link } from "react-router-dom";
import { IHeaderProps, INavEntries } from './header.styles';

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { title, navEntries } = props;

  return(
    <div className="header">
      <div className="header__title">
        <span className="header__title__text">{title.toUpperCase()}</span>
      </div>
      <div className="header__navigation" >
        {navEntries.map((entry: INavEntries) => {
          return(
            <Link key={entry.name} className="header__navigation__link" to={entry.path}>
              <span className="header__navigation__link__entry">{entry.name.toUpperCase()}</span>
            </ Link>
          )
        })}
        
      </div>
    </div>
  )
}

export default Header;
