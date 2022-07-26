import React from 'react';
import { Button, Divider, Tooltip } from '@mui/material';

import { ModalContext } from '../contexts';

function PricingCard({
  name,
  price,
  month,
  subText,
  buttonClick,
  buttonText,
  target,
  favorite,
  ul,
  title,
  tooltip,
}) {
  const { matches1025 } = React.useContext(ModalContext);
  const ulRef = React.useRef();
  // Состояние тултипа в моб. версии
  const [open, setOpen] = React.useState(false);
  const handleTooltipOpen = (index) => {
    setOpen(index);
  };
  // Если клик вне списка, скрыть тултип
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  function handleOutsideClick(event) {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(ulRef.current)) {
      setOpen(false);
    }
  }

  return (
    <div className={favorite ? 'pricing__card pricing__card--favorite' : 'pricing__card'}>
      <h3>{name}</h3>
      <p>
        {!month && <span>$</span>} {price}
      </p>
      <span className='pricing__span' style={month && { visibility: 'hidden' }}>/month</span>
      <Button
        variant={favorite ? 'contained' : 'outlined'}
        onClick={buttonClick}
        target={target && `_blank`}>
        {buttonText}
      </Button>
      <span className="pricing__subtext">{subText}</span>
      <ul ref={ulRef}>
        <Divider />
        {title && <p>{title}</p>}
        {ul.map((item, index) =>
          tooltip && tooltip[index] ? (
            matches1025 ? (
              // Пк версия
              <Tooltip key={index} title={tooltip[index]} leaveDelay={100} arrow placement="right">
                <li key={index}>{item}</li>
              </Tooltip>
            ) : (
              // Моб. версия
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                open={open === index && true}
                title={tooltip[index]}
                key={index}
                arrow
                placement="top">
                <li onClick={() => handleTooltipOpen(index)} key={index}>
                  {item}
                </li>
              </Tooltip>
            )
          ) : (
            // Если нет тултипов
            <li key={index}>{item}</li>
          ),
        )}
      </ul>
    </div>
  );
}

export default PricingCard;
