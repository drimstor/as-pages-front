import React from 'react';
import { ModalContext } from '../contexts';

import { Button, Divider, Typography, Tooltip } from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import img from '../assets/OrganicInstallsPerKeyword.png';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 550,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    padding: '10px',
    boxShadow: '0px 0px 6px rgb(0 0 0 / 16%)',
  },
}));

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
      <p className="pricing__price">
        {!month && <span>$</span>} {price}
      </p>
      <span className="pricing__span" style={month && { visibility: 'hidden' }}>
        /month
      </span>
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
              <HtmlTooltip
                placement="right-start"
                title={
                  <React.Fragment>
                    <Typography color="inherit">{tooltip[index]}</Typography>
                    {/* {"It's very engaging. Right?"}  */}
                    <img src={img} width="530px" alt="descr-img" />
                  </React.Fragment>
                }>
                <li key={index}>{item}</li>
              </HtmlTooltip>
            ) : (
              // Моб. версия
              <HtmlTooltip
                PopperProps={{
                  disablePortal: true,
                }}
                open={open === index && true}
                placement="top"
                arrow
                key={index}
                title={<Typography color="inherit">{tooltip[index]}</Typography>}>
                <li onClick={() => handleTooltipOpen(index)} key={index}>
                  {item}
                </li>
              </HtmlTooltip>
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

{
  /* <Tooltip
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
              </Tooltip> */
}
