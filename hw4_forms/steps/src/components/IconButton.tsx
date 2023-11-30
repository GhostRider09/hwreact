import {TIconButtonProps} from '../Types.ts'

export default function IconButton({icon, onClick}: TIconButtonProps) {
  return (
    <button type='button' onClick={onClick}><i className={`fa fa-${icon}`}></i></button>
  )
}