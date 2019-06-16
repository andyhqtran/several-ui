import PropTypes from 'prop-types';
import React from 'react';
import { BarChart } from 'styled-icons/feather/BarChart';
import { Bell } from 'styled-icons/feather/Bell';
import { Bold } from 'styled-icons/feather/Bold';
import { Bookmark } from 'styled-icons/feather/Bookmark';
import { Check } from 'styled-icons/feather/Check';
import { ChevronDown } from 'styled-icons/feather/ChevronDown';
import { ChevronLeft } from 'styled-icons/feather/ChevronLeft';
import { ChevronRight } from 'styled-icons/feather/ChevronRight';
import { ChevronUp } from 'styled-icons/feather/ChevronUp';
import { Crop } from 'styled-icons/feather/Crop';
import { DownloadCloud as Download } from 'styled-icons/feather/DownloadCloud';
import { Edit2 as Edit } from 'styled-icons/feather/Edit2';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Folder } from 'styled-icons/feather/Folder';
import { FolderMinus } from 'styled-icons/feather/FolderMinus';
import { FolderPlus } from 'styled-icons/feather/FolderPlus';
import { Heart } from 'styled-icons/feather/Heart';
import { HelpCircle } from 'styled-icons/feather/HelpCircle';
import { Image } from 'styled-icons/feather/Image';
import { Instagram } from 'styled-icons/feather/Instagram';
import { Italic } from 'styled-icons/feather/Italic';
import { Link } from 'styled-icons/feather/Link';
import { List } from 'styled-icons/feather/List';
import { Plus } from 'styled-icons/feather/Plus';
import { PlusSquare } from 'styled-icons/feather/PlusSquare';
import { Search } from 'styled-icons/feather/Search';
import { Settings } from 'styled-icons/feather/Settings';
import { Trash2 as Trash } from 'styled-icons/feather/Trash2';
import { Twitter } from 'styled-icons/feather/Twitter';
import { Underline } from 'styled-icons/feather/Underline';
import { UploadCloud as Upload } from 'styled-icons/feather/UploadCloud';
import { User } from 'styled-icons/feather/User';
import { Users } from 'styled-icons/feather/Users';
import { X as Close } from 'styled-icons/feather/X';
import { XCircle as CloseCircle } from 'styled-icons/feather/XCircle';

import { StyledIcon } from './styles';

const getIcon = (name, size) => {
  switch (name) {
    case 'bar-chart':
      return <BarChart height={size} width={size} />;
    case 'bell':
      return <Bell height={size} width={size} />;
    case 'bold':
      return <Bold height={size} width={size} />;
    case 'bookmark':
      return <Bookmark height={size} width={size} />;
    case 'check':
      return <Check height={size} width={size} />;
    case 'chevron-down':
      return <ChevronDown height={size} width={size} />;
    case 'chevron-left':
      return <ChevronLeft height={size} width={size} />;
    case 'chevron-right':
      return <ChevronRight height={size} width={size} />;
    case 'chevron-up':
      return <ChevronUp height={size} width={size} />;
    case 'crop':
      return <Crop height={size} width={size} />;
    case 'download':
      return <Download height={size} width={size} />;
    case 'edit':
      return <Edit height={size} width={size} />;
    case 'facebook':
      return <Facebook height={size} width={size} />;
    case 'folder':
      return <Folder height={size} width={size} />;
    case 'folder-minus':
      return <FolderMinus height={size} width={size} />;
    case 'folder-plus':
      return <FolderPlus height={size} width={size} />;
    case 'heart':
      return <Heart height={size} width={size} />;
    case 'help-circle':
      return <HelpCircle height={size} width={size} />;
    case 'image':
      return <Image height={size} width={size} />;
    case 'instagram':
      return <Instagram height={size} width={size} />;
    case 'italic':
      return <Italic height={size} width={size} />;
    case 'link':
      return <Link height={size} width={size} />; // eslint-disable-line jsx-a11y/anchor-is-valid
    case 'list':
      return <List height={size} width={size} />;
    case 'plus':
      return <Plus height={size} width={size} />;
    case 'plus-square':
      return <PlusSquare height={size} width={size} />;
    case 'search':
      return <Search height={size} width={size} />;
    case 'settings':
      return <Settings height={size} width={size} />;
    case 'trash':
      return <Trash height={size} width={size} />;
    case 'twitter':
      return <Twitter height={size} width={size} />;
    case 'underline':
      return <Underline height={size} width={size} />;
    case 'upload':
      return <Upload height={size} width={size} />;
    case 'user':
      return <User height={size} width={size} />;
    case 'users':
      return <Users height={size} width={size} />;
    case 'close':
      return <Close height={size} width={size} />;
    case 'close-circle':
      return <CloseCircle height={size} width={size} />;
    default:
      throw new Error();
  }
};

const Icon = (props) => (
  <Icon.Element className={props.className}>
    {getIcon(props.name, props.size)}
  </Icon.Element>
);

Icon.Element = StyledIcon;

Icon.defaultProps = {
  size: 24,
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf([
    'bar-chart',
    'bell',
    'bold',
    'bookmark',
    'check',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'crop',
    'download',
    'edit',
    'facebook',
    'folder',
    'folder-minus',
    'folder-plus',
    'heart',
    'help-circle',
    'image',
    'instagram',
    'italic',
    'link',
    'list',
    'plus',
    'plus-square',
    'search',
    'settings',
    'trash',
    'twitter',
    'underline',
    'upload',
    'user',
    'users',
    'close',
    'close-circle',
  ]).isRequired,
  size: PropTypes.number,
};

export default Icon;
