import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IASideLinkItemProps } from '../../common/interfaces/AsideLinkItem.interface';

const AsideLinkItem: FC<IASideLinkItemProps> = ({ name, url, Icon, handleLinkClick }) => {
  return (
    <Link to={url} key={name} style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
      <ListItem button={true}>
        <ListItemIcon>
          {/* <span className={icon}></span> */}
          {Icon}
        </ListItemIcon>
        {/* < */}

        <ListItemText sx={{ color: '#000' }}>{name}</ListItemText>
      </ListItem>
    </Link>
  );
};

export default AsideLinkItem;
