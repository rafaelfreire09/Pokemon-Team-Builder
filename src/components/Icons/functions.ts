import { EIcon } from '../../types/icon';

import ClearIcon from '../../assets/remove-icon.png';
import RemoveIcon from '../../assets/minus-icon.png';
import CreateIcon from '../../assets/right-arrow-icon.png';
import DeleteIcon from '../../assets/remove-icon.png';
import EditIcon from '../../assets/edit-icon.png';

export function whatIcon (icon: string): string
{
    if (icon === 'clear')
    {
        return ClearIcon;
    }

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
    if(color === 'clear')
    {
        return "#ff3232";
    }

    if(color === 'remove')
    {
        return "#e9a246";
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