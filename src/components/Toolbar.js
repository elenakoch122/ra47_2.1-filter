import { v4 as uuidv4 } from 'uuid';

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map(f => (
        <button
          className={f === selected ? "toolbar__button button_selected" : "toolbar__button"}
          key={uuidv4()}
          onClick={() => onSelectFilter(f)}
        >{f}</button>
      ))}
    </div>
  );
}
