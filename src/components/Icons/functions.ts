import { EIcon } from '../../types/icon';

import RemoveIcon from '../../assets/remove-icon.png';
import CreateIcon from '../../assets/add-icon.png';
import DeleteIcon from '../../assets/cross-icon.png';
import EditIcon from '../../assets/edit-icon.png';

export function whatIcon (icon: string): string
{
    if (icon === 'remove')
    {
        return RemoveIcon;
    }
    
    if (icon === 'create')
    {
        return CreateIcon;
    }
    
    if (icon === 'delete')
    {
        return DeleteIcon;
    }

    if (icon === 'edit')
    {
        return EditIcon;
    }

    return '';
}

export function whatColor (color: EIcon): string
{
    if(color === 'remove')
    {
        return "#f86d5a";
    }
    
    if (color === 'create')
    {
        return "#6068e2";
    }
    
    if(color === 'delete')
    {
        return "#ff3232";
    }
    
    if (color === 'edit')
    {
        return "#4854ff";
    }

    return "#dadbec";
}